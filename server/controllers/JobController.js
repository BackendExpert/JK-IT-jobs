const Job = require("../models/Jobs");
const User = require("../models/User");

const JobController = {
    createJob: async(req, res) => {
        try{
            const email = req.params.email

            const {
                jobtitle,
                jobdesc,
                salary,
                desc,
                qulifications,
                skills,
                closingdate
            } = req.body

            const getid = await User.findOne({ email: email })

            const newJob = new Job({
                jobposter: getid._id,
                jobTitle: jobtitle,
                desc: jobdesc,
                salary: salary,
                qulification: qulifications,
                skills: skills,
                closingdate: closingdate
            })

            const resultnewjob = await newJob.save()

            if(resultnewjob){
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

    alljobs: async(req, res) => {
        try{
            const getalljobs = await Job.find()

            return res.json({ Result: getalljobs})
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = JobController;