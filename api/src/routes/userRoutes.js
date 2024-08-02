import {Router} from 'express'
import { createUserController } from '../controller/user/createUserController.js';

const userRoutes = Router();


userRoutes.post('/create',(req,resp)=>createUserController(req,resp));



export default userRoutes;