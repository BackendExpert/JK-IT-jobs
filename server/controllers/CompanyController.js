const Company = require('../models/Company')

const CompanyController = {
    createComProfile: async(req, res) => {
        try{
            const {
                com_name,
                com_desc,
                facebook,
                linkedin,
                twitter,
                instagram,
                website,
                other
            } = req.body

            const com_email = res.body.params
            const com_logo = req.files['com_logo'] ? req.files['com_logo'][0].path : null;
            const com_cover = req.files['com_cover'] ? req.files['com_cover'][0].path : null;

            const checkCompany = await Company.findOne({
                $or: [
                    { com_name: com_name },
                    { com_email: com_email },
                ]
            })

            if(checkCompany){
                return res.json({ Error: "Comapany name Already Registed"})
            }

            const newcompany = new Company({
                com_name: com_name,
                com_email: com_email,
                com_logo: com_logo,
                com_cover: com_cover,
                com_desc: com_desc,
                com_links: {
                    facebook: facebook || "",
                    linkedin: linkedin || "",
                    twitter: twitter || "",
                    instagram: instagram || "",
                    website: website || "",
                    other: other || ""
                }
            })

            const resultnewcom = await newcompany.save()

            if(resultnewcom){
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

module.exports = CompanyController;