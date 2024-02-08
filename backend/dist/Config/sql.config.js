"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sqlConfig = {
    user: 'sa',
    password: 'password123',
    database: 'ProjectManagement',
    server: "CALIGULA\\MSSQLSERVER1",
    // port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
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
