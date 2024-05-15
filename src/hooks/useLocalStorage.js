import SyncStorage from 'sync-storage';

/**
 * Hook utilizado para almacenar el Menu de hoy.
 * @returns 
 */
const useLocalStorage =  () => {
    const clearStorage = () => {
        SyncStorage.getAllKeys().forEach((key) => SyncStorage.remove(key));
    };

    const setItem = (key, value) => {
        try{
            SyncStorage.set(key, JSON.stringify(value));
        }
        catch(error){
            console.log(error);
        }
    };

    const getItem = (key) => {
        const value = SyncStorage.get(key);
        return value ? JSON.parse(value) : undefined
    };

    const getItems = (keys) => {
        const values = keys.map((key) => SyncStorage.get(key));
        return values ? JSON.parse(values) : undefined
    };

    const getAllKeys = () => {
        const keys = SyncStorage.getAllKeys();
        return keys;
    }

    const getKeysSelector = (selector) => {
        const keys = SyncStorage.getAllKeys();
        const selectedKeys = keys.filter((item) => item.includes(selector));
        return selectedKeys;
    }

    return {clearStorage, setItem, getItem, getItems, getAllKeys, getKeysSelector};
};

export default useLocalStorage;