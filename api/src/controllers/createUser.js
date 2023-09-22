const Users = require('../../models/User')

const createUser = async (req, res) => {
    const{name, email, password} = req.body
    try{
        if(!req.body){
           
            return res.status(404).json({
                error : "No Fount"
            })
        }
        const user = await  Users.create({name, email, password})
  
        return res.status(200).json({
            success : "ok",
            user
        })
    }
    catch(error){
        return res.status(500).json({
            error : error.message
        })
    }
};

module.exports = createUser