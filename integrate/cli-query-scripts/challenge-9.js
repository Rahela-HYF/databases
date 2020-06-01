/*
  user input: table name, column name, search string, number of entries
  logged data: return a given number of rows matching the search parameter
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  tableName:process.argv[2],
  columnName:process.argv[3],
  searchString:process.argv[4],
  numberEntries: process.argv[5]
};

const queryString = `SELECT * FROM ${userInput.tableName} 
WHERE ${userInput.columnName} LIKE'%${userInput.searchString}%'limit ${userInput.numberEntries}`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});
