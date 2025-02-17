const express = require("express")
const mongoose= require("mongoose")
const dotenv= require("dotenv");
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
dotenv.config();
const app = express();
//! To use "import" keyword, add '"type":"module" to package.json file

mongoose.connect(process.env.MONGOURL).then(
    ()=>{console.log('Connected to DB');
}).catch(
    (err)=>{console.log(err);
})

app.use(express.json());

app.listen(3000,()=>{console.log("Server is running on port 3000!!!")});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next)=>{
    const statusCode=err.statusCode||500;
    const message = err.message || 'internal Server Error'
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})

