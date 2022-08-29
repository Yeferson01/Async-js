const fnasyns = () => {
    return new Promise((resolve, reject) => {
        (true) 
          ? setTimeout(() => resolve('async'), 2000)
          : reject(console.log('Error'));
    });
}

const anotherFunction = async  () => {
    const something  = await fnasyns();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherFunction();
console.log('After');