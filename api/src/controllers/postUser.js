const Users = require('../../models/User');

const postUser = async (req,res) =>{
    const {email, password}  = req.body;
    try{
        if(!email === '' || password !== ''){
            const [user, created] = await Users.findOrCreate({
                email, password,
                where : {email},
                defaults :{
                    email : 'correo@correo.com'
                }
            })
            console.log(user)
            console.log(created);
            if(created){
                console.log('ya esta creado');
                return
            }
        }
        return res.status(400).json({
            error : "Faltan datos"
        })
    }
    catch(error){return res.status(500).json({error : error.message})}

};

module.exports = postUser;