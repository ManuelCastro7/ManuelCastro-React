let response = true
let CustomFetch = (time, array) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(response) {
                resolve(array)
            } else {
                reject("Error, no tiene permisos de acceso")
            }
        }, time)
    })
}
export default CustomFetch;