import { Router } from "express";
import { createProject, deleteProject, getOneProject, getProjects, updateProject } from "../Controllers/project.controller";
import { verifyToken } from "../Middlewares/verifyToken";

const projectRouter = Router()

projectRouter.post('/', createProject)
projectRouter.get('/', verifyToken, getProjects)
projectRouter.put('/update/:id', verifyToken, updateProject)
projectRouter.get('/:id', verifyToken, getOneProject)
projectRouter.delete('/delete/:id', verifyToken, deleteProject)

export default projectRouter