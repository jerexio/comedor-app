import { ERROR_MESSAGES } from "../consts/consts";

const validateForm = (fecha, nombre, ingredientes, precio, precioCarnet, urlFoto,reservas,setErrors) => {
    let error = {};
    
    if (!fecha.year || !fecha.month || !fecha.day) {
      error.fecha = ERROR_MESSAGES.ERROR_DATE1;
    } else {
      const inputDate = new Date(fecha.year, fecha.month - 1, fecha.day);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      
      if (inputDate < currentDate) {
        error.fecha = ERROR_MESSAGES.ERROR_DATE2;
      } else {
        const nextWeekDate = new Date(currentDate);
        nextWeekDate.setDate(nextWeekDate.getDate() + 7);
        
        if (
          (inputDate.getDate() > nextWeekDate.getDate() && nextWeekDate.getDate() > 6) ||
          (nextWeekDate.getDate() < 6 && inputDate.getDate() < 26) || (inputDate.getFullYear() != nextWeekDate.getFullYear())
        ) {
          error.fecha = ERROR_MESSAGES.ERROR_DATE3;
        }
      }
    }
    
    if (!nombre) error.nombre = ERROR_MESSAGES.ERROR_NAME;
    if (!ingredientes) error.ingredientes = ERROR_MESSAGES.ERROR_INGREDIENTS;
    if (!precio) error.precio = ERROR_MESSAGES.ERROR_PRECIO;
    if (!precioCarnet) error.precioCarnet = ERROR_MESSAGES.ERROR_PRECIO_CARNET;
    if (!urlFoto) error.urlFoto = ERROR_MESSAGES.ERROR_URLFOTO;
    if (!reservas) error.reservas = ERROR_MESSAGES.ERROR_RESERVATIONS;
    
    setErrors(error);
    return Object.keys(error).length === 0;
  };
  
  export default validateForm;