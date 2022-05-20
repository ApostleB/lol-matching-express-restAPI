
import { API_KEY } from '../Commons/API_KEY';
const axios = require('axios');

export const summonerInfo = async (req , res) => {
  console.log("summerInfroAPI1");
   const name = encodeURI(req.params.summonerName);
    try{
      const response = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`)
      const data = response.data
      console.log("실행");
      console.log("summerInfroAPI2");
      return res.status(200).json({data})
    }catch(error){
      return res.status(400).json({message:"없는 닉네임입니다."});
    }
}
