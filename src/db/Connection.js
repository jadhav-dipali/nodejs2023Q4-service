const mongoose = require("mongoose")
require("dotenv").config();
const dbUrl = process.env.DB_URL;


mongoose.connect(dbUrl)
.then(res=>console.log("connection SuccessFully"))
.catch(err=>console.log("not connected"))