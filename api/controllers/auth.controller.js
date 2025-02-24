const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt= require("jsonwebtoken")
const { errorHandler } = require("../utils/error");

exports.signup= async (req,res,next)=>{
    const {username, email, password} = req.body;
    let hashedPassword = await bcryptjs.hash(password,10) //"hashSync" method provided by bcrypt can be used to avoid the use of "await"
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save()
        res.status(201).json("User created successfully");
    } catch (error) {
        next(error)
    }
    
};

exports.signin= async (req,res,next)=>{
    const {email, password} = req.body;
    try {
        if (email == undefined) {
            
            throw new Error("Fill all fields")
        }
        
        const userFound = await User.findOne({email});
        if (!userFound) {
            return("Invalid cridentials")
        }

        const passwordMatch = await bcryptjs.compare(password, userFound.password);

        if (!passwordMatch) {
            throw new Error("Invalid cridentials")
        }

        const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET, {expiresIn: "30d"});

        const userToSend = { ...userFound.toObject() }; // Create a shallow copy to prevent modification of the original
        delete userToSend.password;
        res.cookie(
            "accessToken",
             token,
             {
                httpOnly: true,
                expires: new Date(Date.now() + 24*60*60*1000)
             }
        ).status(200).json(userToSend);

    } catch (error) {
        next(error)
    }
    
};