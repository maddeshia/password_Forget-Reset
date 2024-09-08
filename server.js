const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./confing/confing.json')



// configures

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// DB Connection

mongoose
.connect(config.MONGO_URL)
.then(()=>console.log('Coonect DB....')).
catch((err)=>console.log(err))



// api.use()

app.use("/api/routes", require("./routes/userRoutes"))


app.listen(config.PORT,()=>{
    console.log(`server is runninng on the: http://localhost:${config.PORT}`);
})








