const { Client } = require("pg");

//setting up .env files
require("dotenv").config();

const sqlUsername = process.env.DB_USER;
const sqlPass = process.env.DB_PASSWORD;
const sqlPort = process.env.PORT;
const sqlDB = process.env.DATABASE;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
username VARCHAR (255)
);

INSERT INTO usernames (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${sqlUsername}:${sqlPass}@localhost:${sqlPort}/${sqlDB}`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
