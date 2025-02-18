const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
// const PwdResetToken = require("../models/PwdResetToken");
const validator = require("validator");

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

            if (!validator.isEmail(email)) {
                return res.json({ error: "Invalid email format" });
            }

            if (password.length < 6) {
                return res.json({ Error: "Password must be at least 6 characters" });
            }

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
                password: hashpass,
                status: true
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
    },

    signin: async(req, res) => {
        try{
            const {
                email,
                password
            } = req.body

            const checkuser = await User.findOne({ email: email })

            if(checkuser){
                const checkpass = await bcrypt.compare(password, checkuser.password)

                if(checkpass){
                    const token = jwt.sign({ id: checkuser._id, role:checkuser.role }, process.env.JWT_SECRET);
                    return res.json({ Status: "Success", Result: checkuser, Token: token })
                }   
                else{
                    return res.json({ Error: "Password not Match"})
                }
            }   
            else{
                return res.json({ Error: "No user found by given Email"})
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;