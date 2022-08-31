//Creamos una funcion anonima con arrow y retornamos una promesa, las promesas retornan una opcion
//en base a una condicion 
const fnasyns = () => {
    return new Promise((resolve, reject) => {
        (true) 
          ? setTimeout(() => resolve('async'), 2000)
          : reject(console.log('Error'));
    });
}

//Creamos otra funcion pero esta es async para especificar que es asincrona y puede hacer llamados await que no 
//interrumpen la ejecucion del codigo
const anotherFunction = async  () => {
    //Aqui esperamos la respuesta de la promesa y la almacenamos en una variable
    const something  = await fnasyns();
    console.log(something);
    console.log('Hello');
}

//Hacemos el lladado despues de un log para comprobar que no se interrumpe la ejecucion
console.log('Before');
anotherFunction();
console.log('After');