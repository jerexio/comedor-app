import { Dimensions } from 'react-native';
export const {height, width} = Dimensions.get('window');


export const HEART = 'heart';
export const NOHEART = 'heart-o';

export const VIEWS = ['Desayuno', 'Almuerzo', 'Merienda'];
export const TIMES = ["desayunos", "almuerzos", "meriendas"];

export const HOME_TITLE = 'Comedor';
export const COMING_TITLE = "Proximas";

export const HOME_NAME = "Home";
export const COMING_NAME = "Proximas";
export const INFO_NAME = "Informacion";
export const BOTTOM_NAME = "BottomTab"
export const MODAL_NAME = 'ModalFood';
export const MAIN_NAME = 'MainContainer';
export const SPLASH_NAME = 'Splash';

export const ICON_HOME = 'home';
export const ICON_HOME_O = 'home-outline';
export const ICON_COMING = 'numeric-5-box-multiple';
export const ICON_COMING_O = 'numeric-5-box-multiple-outline';
export const ICON_INFO = 'information';
export const ICON_INFO_O = 'information-outline';
export const ICON_IOS_INFO = 'ios-information-circle';

export const BOUGHT = "Comprado";
export const BUY = "Comprado";
export const UNAVAILABLE = "Comprado";

export const LIKE_TEXT = ' persona indico que le gusto';
export const LIKES_TEXT = ' personas indicaron que les gusto';
export const NOTEXT = '';

export const MEALS = {
    BREAKFAST: 'desayuno',
    LUNCH: 'almuerzo',
    SNACK: 'merienda',
    LOAD_BREAKFAST: 'Cargar Desayuno',
    LOAD_LUNCH: 'Cargar Almuerzo',
    LOAD_SNACK: 'Cargar Merienda'
  };
  
export const AREAS = {
  SCHOLARSHIPS: 'Becas',
  DEPORTS: 'Deportes y Recreación',
  ASSISTANCE: 'Asistencia Psicopedagógica',
  INTERVETION: 'Intervención Instituticonal',
  SETTLEMENTS: 'Asentamientos',
  URL_SCHOLARSHIPS: 'https://bienestar.uncoma.edu.ar/index.php/category/becas/',
  URL_DEPORTS: 'https://bienestar.uncoma.edu.ar/index.php/category/deportes-y-recreacion/',
  URL_ASSISTANCE:'https://bienestar.uncoma.edu.ar/index.php/category/asistencia-psicopedagogica/',
  URL_INTERVETION:'https://bienestar.uncoma.edu.ar/index.php/category/intervencion-institucional/',
  URL_SETTLEMENTS: 'https://bienestar.uncoma.edu.ar/index.php/category/asentamientos/'
}



export const ERROR_MESSAGES = {
    ERROR_DATE1: "Se requiere ingresar una fecha completa",
    ERROR_DATE2: "La fecha debe ser mayor o igual a la fecha actual",
    ERROR_DATE3: "La fecha tiene que ser menor a 7 días próximos",
    ERROR_NAME: "Se requiere ingresar Nombre",
    ERROR_INGREDIENTS: "Se requiere ingresar Ingredientes",
    ERROR_PRECIO: "Se requiere ingresar Precio",
    ERROR_PRECIO_CARNET: "Se requiere ingresar Precio con Carnet",
    ERROR_URLFOTO: "Se requiere ingresar URL de la foto del Menu",
    ERROR_RESERVATIONS: "Se requiere ingresar una cantidad de reservas"
};

export const ALERT_FORM_GOOD = 'Los datos del nuevo menú se han cargado correctamente.';
  

