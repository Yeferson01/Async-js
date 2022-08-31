//Importamos fetch para hacer conexiones a la api
import fetch from "node-fetch";
//Asignamos la url de la api
const API_URL = 'https://api.escuelajs.co/api/v1';

//Creamos la funcion asincrona que hara la conexion a fetch
async function* fetchData(urlApi) {
    //Hacemos un llamado await a fetch con la url de la api y almacenamos la respuesta en una constante
    const response = await fetch(urlApi);
    //Transformamos la respuesta anterior a json
    const data = await response.json();
    //Retornamos la data optenida de la api
    return data;
}

//Creamos otra funcion asincrona para manejar los errores de la conexion a la api y obtener los datos necesarios
async function* anotherFn(urlApi) {
    try {
        //Hacemos el primer lladado a la api y para obtener los productos 
        const products = await fetchData(`${urlApi}/products`);
        //El segundo llamado es para obtener un producto en especifico
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        //Obtenemos la categoria del producto anterior 
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        
         yield console.log(products);
         yield console.log(product.title);
         yield console.log(category.name);
        //Imprimimos los datos obtenidos anteriormente, los producteos, el nombre de un producto en especifico y la cateoria del mismo
    } catch (error) {
        yield console.error(error);
    }
}

anotherFn(API_URL);