const JobApply = require("../models/JobApply");
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
                applicent_email
            } = req.body

            const cv = req.file.path
            
            const checkjob = await Job.findOne({ _id: jobid })

            if(!checkjob){
                return res.json({ Error: "Job Cannot find"})
            }

            const checkalreadyapply = await JobApply.findOne(
                {
                    $and: [
                        { jobID: jobid },
                        { email:applicent_email },
                    ]
                }
            )

            if(checkalreadyapply){
                return res.json({ Error: "You Alrady Apply for this job"})
            }

            const newjobapplication = new JobApply({
                name: applicent_name,
                email: applicent_email,
                cv: cv

            })




            
        }
        catch(err){
            console.log(err)
        }
    },

    jobscompany: async(req, res) => {
        try{
            const email = req.params.email
            const getuserid = await User.findOne({ email: email })
            const getjobs = await Job.find({ jobposter: getuserid._id }).populate('jobposter')

            return res.json({ Result: getjobs})
        }
        catch(err){
            console.log(err)
        }
    },

    countjobcompany: async(req, res) => {
        try{
            const email = req.params.email
            const getuserid = await User.findOne({ email: email })

            const countdata = await Job.countDocuments({ jobposter: getuserid._id})

            return res.json({ Result: countdata})

        }
        catch(err){
            console.log(err)
        }
    },

    counttotalapplied: async(req, res) =>{
        try{
            

        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = JobController;