//Constante con la direccion de la api 
const API_URL = "https://api.escuelajs.co/api/v1";

//Creamos constante que hace referencia al recurso xmlhttprequest que nos permite hacer peticiones http
const XMLHttpRequest = require("xhr2");
//Instanciamos una constante para crear un objeto del tipo xml...
//const xhr = new XMLHttpRequest();

//Creamos una funcion para comununicarnos con la API, el callback recibe la data o el error del llamado
function fetchData(urlApi, callback) {
    //Instanciamos del recurso xmlhttp para poder trabajar con los elementos de xml
    let xhttp = new XMLHttpRequest();
    //Gracias a la instancia podemos llamar a los metedos, en este caso open que recibe tres parametros, el verbo, la url y asincrono (true)
    //Con esto enviamos una solicitud para conectarnos a la api
    xhttp.open('GET', urlApi, true)
    //Para escuchar diferentes estados que tiene la solicitud y saber si esta disponible la info. 
    xhttp.onreadystatechange = function (event) {
        //Validamos el estado de la peticion
        if (xhttp.readyState === 4) { 
            if (xhttp.status === 200) {
                //Enviamos la data y error lo dejamos null, hacemos un parseo para recibir un json
                callback(null, JSON.parse(xhttp.responseText));
            } else {//Creamos una instancia para manejar los errores
                const error = new Error('Error' + urlApi);
                //Retornamos el callback con el error y no enviamos la data
                return callback(error, null);
            }
        } 
    }
    //Hacemos el llamado de send() para que se ejecute todo lo anterior
    xhttp.send();
}

//Llamado a la funcion fetchdata para implementarla, y le pasamos la url y una funcion anonima que se ejecuta cada vez que llamamos a callback
//La funcion anonima tiene como argumentos error y data
fetchData(`${API_URL}/products`, function (error1, data1) {
    //Si hay un error, detiene todo y notifica el error
    if (error1) return console.error(error1);
    //Llamado nuevamente a la api para obtener un elemento especifico
    fetchData(`${API_URL}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API_URL}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});