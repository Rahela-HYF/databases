/*
  user input: column name, starting index, number of entries
  logged data: a specific number artist names, starting at a specific row number
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  columnName: process.argv[2],
  startingIndex: process.argv[3],
  numberEntries: process.argv[4]
};

const queryString = `SELECT ${userInput.columnName}  FROM Artist  
LIMIT ${userInput.startingIndex},${userInput.numberEntries} `;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});
