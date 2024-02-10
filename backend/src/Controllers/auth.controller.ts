import { Request, Response } from "express"
import bcrypt from 'bcrypt';
import mssql from "mssql";
import jwt from "jsonwebtoken";
import { sqlConfig } from "../Config/sql.config"

export const loginUser = async(req: Request, res: Response)=>{
    try {
        const{email, password} = req.body

        const pool = await mssql.connect(sqlConfig)

        let user = (await pool.request()
        .input("email", email)
        .input("password", password)
        .execute("loginUser")).recordset

        console.log(user);
        // return res.json(
        //     user 
        // )

        if(user[0]?.email == email){
            const correct_pwd = await bcrypt.compare(password, user[0].password)

            if(!correct_pwd){
                 return res.status(401).json({
                    error: "Incorrect password"
                 });
            }

            const loginCredentials = user.map(response =>{
                const{password, ...rest} = response

                return rest
            })

            const token = jwt.sign(loginCredentials[0], process.env.SECRET as string)
            
            return res.status(200).json({
                message: "Logged in successfully", token 
            })
            // else
        }else{
            return res.json({
                error: "User not found"
            });
        }
        

    } catch (error) {
        return res.sendStatus(501).json({
            error: "Internal Server Error"
        })
    }
}