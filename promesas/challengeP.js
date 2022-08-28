//Importamos node-fetch que facilita la comunicacion con la API
import fetch from 'node-fetch'

//Metemos la url en una constante
const API = 'https://api.escuelajs.co/api/v1';

//funcion que va a recibir la url de la api y va a retornar el llamada de fetch
function fetchData(urlApi) {
    //fetch cuenta con promesas que nos facilita el consumo de apis
    return fetch(urlApi);
}

fetchData(`${API}/products`)
.then(response => response.json()) //Convertimos la respuesta en un json
.then(products => {
    for (let iterator of products) {
        if (iterator.price < 100) {
            console.log(iterator);
        }
    }
    //console.log(products); //Impriminos los products
    //Retornamos fetchData para hacer más llamados a la misma y obtener lo que necesitamos
    return fetchData(`${API}/products/${products[0].id}`)
})
.then(response => response.json())
.then(product => {
    console.log(product.title);
    //LLamamos nuevamente a fetchData
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
    console.log(category.name);
})
.catch(err => console.log(err))
.finally(() => console.log('Finally'))

/*Llamado a fetchData y uso de promesa para completar la logica
fetchData(`${API}/products`) //especificamos la ruta
.then(response => response.json()) //obtenemos la respuesta como un json
.then(products => {
    console.log(products); // mostramos todo los productos que obtuvimos
})//Se puede anidar tantos then o catch como sea necesario
.then(() => {
    console.log('Hola');
})
.catch(error => console.log(error));*/