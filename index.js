const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

const mongoString = process.env.DATABASE_URL

const routes = require('./routes/routes');

app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());


mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error',(error)=>{
    console.log(error)
})

database.once('connceted',()=>{
    console.log('Databse Connceted')
})


app.use('/api', routes)


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

