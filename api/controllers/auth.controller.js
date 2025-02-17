const User = require("../models/user.model");
const bcryptjs = require("bcryptjs")

exports.signup= async (req,res)=>{
    const {username, email, password} = req.body;
    let hashedPassword = await bcryptjs.hash(password,10) //"hashSync" method provided by bcrypt can be used to avoid the use of "await"
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save()
        res.status(201).json("User created successfully");
    } catch (error) {
        res.status(500).json(error.errmsg)
    }
    
}