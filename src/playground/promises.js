const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error');
    }, 2000)

});


console.log('before');
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error)
});

console.log('after');