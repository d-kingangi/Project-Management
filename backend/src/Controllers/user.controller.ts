import mssql from 'mssql';
import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import {v4} from 'uuid';
import {User} from "../Interfaces/user";
import { sqlConfig } from "../Config/sql.config";
import { registerUserSchema } from '../Validators/users.validators';

// const users: User[] = []

export const createUser = async(req: Request, res: Response)=>{
    try{
        const id = v4()

        const {userName, email, password}:User = req.body

        const hashed_pwd = await bcrypt.hash(password, 3)

        let {error} = registerUserSchema.validate(req.body)

        if(error){
            return res.status(404).json({
                error: error
            })
        }

        // const newUser = {user_id:id, userName, email, password}

        // users.push(newUser)

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("user_id", mssql.VarChar, id)
        .input("userName", mssql.VarChar, userName)
        .input("email", mssql.VarChar, email)
        .input("password", mssql.VarChar, hashed_pwd)
        .execute('registerUser')).rowsAffected

        console.log(result)

        // newUser = {user_id:id, userName, email, password};

        return res.json({
            message:"Account created successfully",
        })
    } catch(error) {
        return res.json({error: error})
    }
}

export const getUsers =  async(req: Request, res:Response)=>{
    try {
        // return res.json({
        //     users: users
        // })
        const pool = await mssql.connect(sqlConfig);
        let allusers = (await pool.request().execute('getAllUsers')).recordset

        return res.status(200).json({
            users: allusers
        })
    } catch (error) {
        return res.json({error})
    }
}

export const getOneUser = async(req: Request, res:Response)=>{
    try {
        const id = req.params.id

        // const singleUser = users.filter(user=> user.user_id == id)

        const pool = await mssql.connect(sqlConfig)

        let user = (await pool.request().input("user_id", id).execute('getOneUser')).recordset

        return res.json({
            user
        })
    } catch (error) {
        return res.json({error})
    }
}

export const updateUser = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id

        const {userName, email, password}:User = req.body

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("user_id", id)
        .input("userName", mssql.VarChar, userName)
        .input("email", mssql.VarChar, email)
        .input("Password", mssql.VarChar, password)
        .execute('updateUser')).rowsAffected

        console.log(result);
        

        return res.status(200).json({
            message: "User updated successfully"
        })
    } catch (error) {
        return res.json({error})
    }
}

export const deleteUser = async(req: Request, res: Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("user_id", mssql.VarChar, id)
        .execute('deleteUser')
        ).rowsAffected

        console.log(result[0]);
        
        if(result[0] == 0){
            return res.status(201).json({
                error: "User not found"
            })
        }else{
            return res.status(200).json({
                message: "Account deleted successfully"
            })
        }   
    } catch (error) {
        return res.json({error})
    }
}

