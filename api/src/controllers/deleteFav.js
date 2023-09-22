const Favorites = require('../../models/Favorites');

const deleteFav = async (req, res) => {
    const {id} = req.params;
    try{
        if(!id){ return res.status(404).json({ error : "id Not found"})};
        await Favorites.destroy({where : {id}});
        return res.status(200).json({
            success : `id ${id} delete, ok`
        })

    }
    catch(error){ return res.status(500).json({error : error.message})}
};
module.exports = deleteFav 