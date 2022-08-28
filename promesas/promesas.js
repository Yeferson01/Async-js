let num = Math.floor(Math.random() * (20 - 10) + 10);

const countCows = new Promise(function (resolve, reject) {
    if (num >= 15)
        resolve(`What do you think, you have enought cows ${num}`);
    else 
        reject(`I am sorry, you need more cows, because you have ${num}`);
});

countCows.then((result) => console.log(result))
        .catch((result) => console.log(result))
        .finally((result) => console.log('All have a end'));
