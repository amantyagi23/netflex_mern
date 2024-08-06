import {Router} from 'express'
import { createUserController } from '../controller/user/createUserController.js';
import { loginController } from '../controller/user/loginController.js';
import { changePasswordController } from '../controller/user/changePasswordController.js';
import { ensureAuthentication } from '../shared/utils/middleware.js';
import { getMeController } from '../controller/user/getMeController.js';

const userRoutes = Router();


userRoutes.post('/create',(req,resp)=>createUserController(req,resp));


userRoutes.post('/login',(req,resp)=>loginController(req,resp))

userRoutes.get('/getme',ensureAuthentication,(req,resp)=>getMeController(req,resp))

userRoutes.post('/changepassword',ensureAuthentication,(req,resp)=>changePasswordController(req,resp))

export default userRoutes;