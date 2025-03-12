const Company = require('../models/Company')

const CompanyController = {
    createComProfile: async(req, res) => {
        try{
            const {
                com_name,
                com_logo,
                com_cover,
                com_desc,
                facebook,
                linkedin,
                Twitter,
                instagram,
                website,
                other
            } = req.body

            const com_email = res.body.params

            const checkCompany = await Company.findOne({
                $or: [
                    { com_name: com_name },
                    { com_email: com_email },
                ]
            })

            if(checkCompany){
                return res.json({ Error: "Comapany name Already Registed"})
            }

            

        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = CompanyController;