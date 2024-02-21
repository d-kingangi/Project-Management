import mssql from 'mssql';
import dotenv from 'dotenv'

dotenv.config();

export const sqlConfig = {
    //enter custom server credentials
    user: '' || process.env.DB_USER,
    password: '' || process.env.DB_PWD,
    database: '' || process.env.DB_NAME,
    server: "" ||process.env.SERVER,
    port: 1433,

    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },

    options:{
        encrypt: false,
        trustServerCertificate: true
    }
}

// console.log(sqlConfig);

// let connect = async () =>{
//     let pool = await mssql.connect(sqlConfig)

//     if(pool.connected){
//         console.log("connected");

//         // let query = 'CREATE TABLE users(user_id VARCHAR(100) NOT NULL, userName VARCHAR(100) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(200) NOT NULL)'

//         let result = (await (await pool.connect()).query(query)).rowsAffected

//         console.log(result);
        
//     }else{
//         console.log('not connected');
        
//     }
// }

// connect()