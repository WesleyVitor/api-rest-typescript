import sqlite3 from "sqlite3";
import invariant from "tiny-invariant";
const DATABASE_FILE = process.env.DATABASE_FILE;
invariant(DATABASE_FILE, "Arquivo não encontrado");
export const openConection = () => {
  let db = new sqlite3.Database(DATABASE_FILE);
  return db;
};

export const dbQueryFirst = async (query: string, params?: any[]) => {
  const value = await dbQuery(query, params);
  return value[0];
};

export const dbQuery = (query: string, params?: any[]) => {
  let db = openConection();
  return new Promise<any[]>((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  }).finally(() => {
    db.close();
  });
};
