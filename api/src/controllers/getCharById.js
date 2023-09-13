const axios = require("axios");

const getCharById = async (req, res) => {
  const {id} = req.params;
  try{
    const {data} = axios(`https://rickandmortyapi.com/api/character/${id}`);
    if(data){
      res.status(200).send({...data});
    }
    else{
      res.status(404).send("Not Found Character")
    }
  }
 catch(error){
  res.status(500).json({message: error.message});
 } 

}

module.exports = getCharById;
