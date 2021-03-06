/*
  user input: name of table, name of column, search string
  logged data: all entries in the table who's column matches the search
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  tableName:process.argv[2],
  columnName:process.argv[3],
  searchString:process.argv[4]
};

// hint:  `... LIKE '%${userInput.searchString}%'`
const queryString = `SELECT * FROM ${userInput.tableName} 
WHERE ${userInput.columnName} LIKE'%${userInput.searchString}%'`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});
