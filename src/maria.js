import mariadb from "mariadb";
import config from "./config/dbConfig.json";

const pool = mariadb.createPool(config);

async function asyncFunction() {
  let conn;
  try{
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    console.log(rows);
    const res = await conn.query("INSERT INTU myTable value (?,?)", [1, "mariadb"]);
    console.log(res);

  }catch(err){
    throw err;
  }finally{
    if(conn) return conn.end();
  }
}