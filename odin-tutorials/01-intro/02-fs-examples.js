// const fs = require("fs");
/*
try {
  fs.renameSync("before.json", "after.json");
} catch (err) {
  console.log(err);
}
*/
// it works~

const fs = require("fs").promises;
console.log("blah1");

async function example() {
  const fileName = "example.txt";
  try {
    const data = await fs.readFile(fileName, "utf-8");
    console.log(data);
    const content = "adding this content";
    await fs.writeFile(fileName, content);
    console.log("example.txt updated");
    const newData = await fs.readFile(fileName, "utf-8");
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}

example();
