const CompanyController = {
    createComProfile: async(req, res) => {
        try{
            const {
                com_name,
                com_email,
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

            const email = res.body.params

            
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = CompanyController;