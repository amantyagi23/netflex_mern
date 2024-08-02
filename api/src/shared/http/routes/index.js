
import {Router} from 'express'
import userRoutes from '../../../routes/userRoutes.js';

const routes = Router();


routes.use('/user',userRoutes)

// routes.use('/movies',)



export default routes;