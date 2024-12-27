// npm - global command, comes with node
// npm --version

//local dependency - use only in this aprticular project
// npm i <packageName>

// global dependency -use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual appraoch (create package.json in root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everthing default)

// const _ = require("lodash");

// const items = [1, [2, 3, [4]]];

// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("hello people");

const { readFile } = require("fs");

console.log("started a first task");
//check file path!!
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting enxt tast");
