const axios = require("axios");

axios
  .post("https://whatever.com/todos", { todo: "buy the milk" })
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
