const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const PwdResetToken = require("../models/PwdResetToken");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const authController = {
    signup: async (req, res) => {
        try{
            const {
                username, 
                email,
                password
            } = req.body


            const checkuser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email },
                ]
            })

            if(checkuser){
                return res.json({ Error: "User Already exists in Given username or Email"})
            }

            const hashpass = await bcrypt.hash(password, 10)

            const newUser = new User({
                username: username,
                email: email,
                password: hashpass
            })

            const resultnewUser = await newUser.save()

            if(resultnewUser){
                return res.json({ Status: "Success"})
            }   
            else{
                return res.json({ Error: "Internal Server Error"})
            }            
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;