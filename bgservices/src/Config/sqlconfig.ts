import dotenv from 'dotenv';

dotenv.config()

// console.log(process.env.DB_USER);

export const sqlConfig = {
    //enter custom server credentials
    user: '' || process.env.DB_USER,
    password: '' || process.env.DB_PWD,
    database: ' || process.env.DB_NAME,
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