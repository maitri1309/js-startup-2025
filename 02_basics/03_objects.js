//singleton=constructor
//object.create
//object literals (not constructor)

const mySym = Symbol("key1");

const JsUser = {
    name: "Maitri",
    "full name": "Dakoria maitri",
    [mySym]: "myKey1",
    age: 21,
    location: "Surat",
    email: "maitri@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "maitri@chatgpt.com"
//Object.freeze(JsUser);
JsUser.email = "maitri@xyz.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
//console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
//console.log(JsUser.greetingTwo);

