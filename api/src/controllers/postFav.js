const Favorites = require('../../models/Favorites');
const postFav = async (req, res) => {
    const data = req.body;
    try{
        if(!data){return res.status(404).json({error : "Not found"})};
        const {name, status, species, image, gender} = data;
 
        const [favorite, created] = await Favorites.findOrCreate({
            where : {name, status, species, image, gender}
        });
        console.log(created)
        return res.status(200).json({ 
            favorite
        })
   
    }
    catch(error) {return res.status(500).json({ error : error.message })};
};

module.exports = postFav;

