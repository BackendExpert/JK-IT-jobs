const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
// const PwdResetToken = require("../models/PwdResetToken");
const validator = require("validator");
const UserPassOtp = require("../models/UserPassOTP");
const crypto = require('crypto')

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
    },

    forgetpass: async(req, res) => {
        try{
            const { email } = req.body

            const chechuser = await User.findOne({ email: email })

            if(!chechuser){
                return res.json({ Error: 'No user found by given email address'})
            }

            const checkotpindb = await UserPassOtp.findOne({ email: email })

            if(checkotpindb){
                return res.json({ Error: "You Already Request a OTP please try again 15min or check the email"})
            }

            const otp = Array.from(crypto.randomFillSync(new Uint8Array(6)))
            .map(byte => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[byte % 62])
            .join('');
            
            const hashotp = await bcrypt.hash(otp, 10)
            const defultTime = new Date(); 
            const expireAt = new Date(defultTime.getTime() + 15 * 60000);

            const newOTP = new UserPassOtp({
                email: email,
                otp: hashotp,
                expire_at: expireAt
            })

            const resultOTP = await newOTP.save()

            if(resultOTP){
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "Password Reset",
                    html: `<h1>Password Reset OTP</h1>
                            <p>Password Reset Token: ${otp}</p>
                            <p>This token will be expired after 15min</p>
                            <p>Thank you</p>
                            <p>Admin</p>
                    `
                };
                await transporter.sendMail(mailOptions);

                return res.json({ Status: "Success"})
            }
        }
        catch(err){
            console.log(err)
        }
    },

    verifyotp: async(req, res) => {
        try{
            const { otp } = req.body

            const email = req.params.email

            const checkuser = await UserPassOtp.findOne({ email: email })

            if(!checkuser) {
                return res.json({ Error: "No User found"})
            }

            const checkotp = await bcrypt.compare(otp, checkuser.otp)

            if(!checkotp){
                return res.json({ Error: "The OTP is cannot be verify.. please check"})
            }

            const deleteotp = await UserPassOtp.findOneAndDelete({ email: email })

            if(deleteotp){
                const checkpass = Array.from(crypto.randomFillSync(new Uint8Array(6)))
                .map(byte => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[byte % 62])
                .join('');

                

                const token = jwt.sign({ token: checkpass }, process.env.JWT_SECRET);
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

    resetpass: async(req, res) => {
        try{
            const {
                email, 
                newpass,
                confirmnewpass
            } = req.body

            const useremail = req.params.email

            if(email !== useremail){
                return res.json({ Error: "email cannot be verify"}) 
            }



        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;