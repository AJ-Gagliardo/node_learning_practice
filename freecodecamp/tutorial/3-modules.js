//Common JS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)
const names = require("./4-names");

// destructuring is an option if i want to sayHi(john)
// const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
// console.log(data);
require("./7-mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
