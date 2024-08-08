import {Router} from "express"
import { ensureAuthentication, ensureAuthorization } from "../shared/utils/middleware.js";
import { createMovieController } from "../controller/movies/createMovieController.js";


const movieRoutes = Router();


movieRoutes.post('/create',ensureAuthentication,ensureAuthorization,(req,resp)=>createMovieController(req,resp))

export default movieRoutes;