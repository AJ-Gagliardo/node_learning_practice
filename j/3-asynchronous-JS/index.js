const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file ;(');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write a file ;(');
      resolve('sucess');
    });
  });
};

/*
// Building promises

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);

    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body);
    return writeFilePro('dog-img.txt', res.body.message);

    // fs.writeFile('dog-img.txt', res.body.message, (err) => {
    //   console.log('random dog image saved to file');
    // });
  })
  .then(() => {
    console.log('Random dog image saved to file');
  })
  .catch((err) => {
    console.log(err.message);
  });

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {});
*/

//promises async await

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed : ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    await writeFilePro('dog-img.txt', res.body.message);
    console.log('random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
};
getDogPic();
