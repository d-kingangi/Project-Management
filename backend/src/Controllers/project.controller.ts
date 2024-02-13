import mssql from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid'
import {Project} from "../Interfaces/project";
import { sqlConfig } from "../Config/sql.config";

export const createProject = async(req: Request, res: Response)=>{
    try{
        const id = v4()

        const {title, descr, user_assigned, end_date}:Project = req.body

        const newProject = {project_id: id, title, descr, user_assigned, end_date}

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("project_id", mssql.VarChar, id)
        .input("title", mssql.VarChar, title)
        .input("descr", mssql.VarChar, descr)
        .input("user_assigned", mssql.VarChar, user_assigned)
        .input("end_date", mssql.VarChar, end_date)
        .execute('createProject')).rowsAffected

        console.log(result);

        return res.json({
            message: "Project created Successfully"
        })
    }catch(error){
        return res.json({error: error})
    }
}

export const getProjects =async (req:Request, res:Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let allprojects = (await pool.request().execute('getProjects')).recordset

        return res.status(200).json({
            projects: allprojects
        })
    } catch (error) {
        return res.json({error})
    }  
} 

export const getOneProject = async (req:Request, res:Response) => {
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let project = (await pool.request().input("project_id", id).execute('getOneProject')).recordset

        return res.json({
            project
        })
    } catch (error) {
        return res.json({error})
    }
}

export const updateProject =async (req:Request, res:Response) => {
    try {
        const id = req.params.id

        const{title, descr, user_assigned, end_date}: Project = req.body

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("project_id", id)
        .input("title", mssql.VarChar, title)
        .input("descr", mssql.VarChar, descr)
        .input("user_assigned", mssql.VarChar, user_assigned)
        .input("end_date", mssql.VarChar, end_date) 
        .execute('updateProject')).rowsAffected

        console.log(result)

        return res.status(200).json({
            message: "Project Updated successfully"
        })
    } catch(error){
        return res.json({error})
    }
}

export const deleteProject =async (req:Request, res:Response)=>{
    try{
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input('project_id', mssql.VarChar, id)
        .execute('deleteProject')).rowsAffected

        console.log(result[0]);

        if(result[0] == 0){
            return res.status(201).json({
                error: "Project not found"
            })
        }else{
            return res.status(200).json({
                message: "Project Deleted Succesfully"
            })
        }   
    } catch(error){
        return res.json({error})
    }
    
}