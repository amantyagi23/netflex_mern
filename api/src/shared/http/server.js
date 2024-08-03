
import http  from 'http'
import express from 'express'
import routes from './routes/index.js';
import cors from 'cors'
import { mongoDBConnection } from '../database/connection.js';

const app = express(); 


const server = http.createServer(app);
app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json())




app.use('/',routes)





mongoDBConnection();


server.listen(4500,(error)=>{
    if(error){
        console.log("error occur",error.message.toString())
    }
    else{
        console.log("Server Started at Port",process.env.PORT)
    }
})