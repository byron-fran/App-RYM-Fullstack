const Favorites = require('../../models/Favorites');

const getFavorites = async (req, res) => {
    try{
        const favorites = await Favorites.findAll();
        if(!favorites) { return res.status(404).json({ error : "not found"})};
        return res.status(200).json({
            success : "ok",
            favorites
        })
    }
    catch(error){ return res.status(500).json({error : error.message })}
};

module.exports = getFavorites