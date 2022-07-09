const express = require('express'); //(1)
const app = express(); //(2)

const mongoose=require('mongoose'); //(4)
const dotenv=require('dotenv');//(4-5) //on a plus besoin de définir le nom et le password
const routesUrls = require('./routers/routers'); //(6)
const cors = require('cors'); //(9)

dotenv.config(); //activate (4-5)

mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("Database connected"));//(5)

app.use(express.json()) //(8) activate la communication entre server et router
app.use(cors()) //(10) secure l access 
app.use('/app', routesUrls); // (7)  "/app/Signup .. ay wehed heka"

app.listen(4000,() => console.log("server is up and running")); //(3)