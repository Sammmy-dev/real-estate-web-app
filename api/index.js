const express = require("express")
const mongoose= require("mongoose")
const dotenv= require("dotenv");
const userRouter = require("./routes/user.route");
dotenv.config();
const app = express();
//! To use "import" keyword, add '"type":"module" to package.json file

mongoose.connect(process.env.MONGOURL).then(
    ()=>{console.log('Connected to DB');
}).catch(
    (err)=>{console.log(err);
})

app.listen(3000,()=>{console.log("Server is running on port 3000!!!")});

app.use("/api/user", userRouter)

