
import {Router} from 'express'
import userRoutes from '../../../routes/userRoutes.js';
import movieRoutes from '../../../routes/movieRoutes.js';

const routes = Router();


routes.use('/user',userRoutes)

routes.use('/movies',movieRoutes)



export default routes;