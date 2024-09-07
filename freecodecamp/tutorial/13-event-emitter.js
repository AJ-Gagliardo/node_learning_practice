const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// 'on' is like an event listener
// first we want to listen fot eh event and then emmit it
customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with ${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "john", 34);

//if response is listening AFTER it is emmited, nothing will happen
