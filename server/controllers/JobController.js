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
    },

    getmyjobscompany: async(req, res) => {
        try{
            const email = req.params.email

            const getuserid = await User.findOne({ email: email })

            const getonlycomjobs = await Job.find({ jobposter: getuserid._id})

            if(getonlycomjobs){
                return res.json({ Result: getonlycomjobs })
            }
            else{
                return res.json({ Error: "No Jobs Foud"})
            }
        }
        catch(err){
            console.log(err)
        }
    },

    // updatejob: async(req, res) => {
    //     try{
    //         const email = req.params.email
    //         const jobid = req.params.id

    //         const { 

    //         } = req.body

    //         const getuserid = await User.findOne({ email: email})

    //         const getjob = await Job.findOne({ _id: jobid })

    //         if(getjob.jobposter !== getuserid._id){
    //             return res.json({ Error: "Internal Server Error"})
    //         }


    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // },

    deletejob: async(req, res) => {
        try{
            const email = req.params.email
            const jobid = req.params.id

            const getuserid = await User.findOne({ email: email })

            const getjob = await Job.findOne({ _id: jobid})

            if(getjob.jobposter !== getuserid._id){
                return res.json({ Error: "Internal Server Error"})
            }

            const deletejobbuid = await Job.findOneAndDelete({ _id: getjob._id })

            if(deletejobbuid){
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

    applyforajob: async(req, res) => {
        try{
            const jobid = req.params.id

            const {
                applicent_name,
                email
            } = req.body

            const cv  = req.file.path
            
            const checkjob = await Job.findOne({ _id: jobid })

            if(!checkjob){
                return res.json({ Error: "Job Cannot find"})
            }

            if(checkjob.applications.email === email){
                return res.json({ Error: "You Alrady Apply for this Job..."})
            }

            const updatejobwithapply = await Job.findOneAndUpdate(
                { _id: jobid },
                {
                    $push: {
                        applications: {
                            name: applicent_name,
                            email: email,
                            cv: cv
                        }
                    }
                },
                { new: true }
            );

            if(updatejobwithapply){
                return res.json({ Status: "Success" })
            }   
            else{
                return res.json({ Error: "Internal Server Error while applying"})
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = JobController;