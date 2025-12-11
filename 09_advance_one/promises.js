const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls,cryptography network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)

})
promiseOne.then(function () {
    console.log('Promise consumed');

})
new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls,cryptography network
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 consumed');
})

const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Maitri", email: "maitri@example.com" })
    }, 1000)
}).then(function (user) {
    console.log(user);
})

const promisrFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Maitri", password: "123" })
        } else {
            reject('ERROR:Something went wrong')
        }
    }, 1000)
}).then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error)
}).finally(() => console.log("The Promise is either resolved or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "MaitriDakoria", password: "123" })
        } else {
            reject('ERROR: Maitri went wrong')
        }
    }, 1000)
})