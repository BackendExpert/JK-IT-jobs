const Job = require("../models/Jobs");

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

            const newJob = new Job({
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
    }
};

module.exports = JobController;