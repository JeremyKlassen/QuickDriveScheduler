const Database = require("better-sqlite3");

function createDatabase() {
  const db = new Database("database.db");

  const createTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      plusCode TEXT,
      role TEXT
    )
  `);

  createTable.run();
  db.close();
}

createDatabase();

console.log("SQLite database and table created successfully.");
