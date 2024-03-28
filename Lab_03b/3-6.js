function square(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            resolve(`${number * number}`);
        } else {
            reject("Error1");
        }
    });
}
  
function cube(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            resolve(`${number * number * number}`);
        } else {
            reject("Error2");
        }
    });
}
  
function calculateFourthPower(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            resolve(`${number * number * number * number}`);
        } else {
            reject("Error3");
        }
    });
}

Promise.race([square(""), cube(3), calculateFourthPower("")])
    .then((results) => {
        console.log(results);
    })
    .catch((err) => {
        console.log(err);
});

Promise.any([square(""), cube(""), calculateFourthPower(3)])
    .then((results) => {
        console.log(results);
    })
    .catch((err) => {
        console.log(err);
});
