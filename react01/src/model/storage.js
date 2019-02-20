var storage = {
    storageSet(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    storageGet(key){
        return JSON.parse(localStorage.getItem(key));
    },
    storageRemove(key){
        localStorage.removeItem(key);
    }
}
export default storage;