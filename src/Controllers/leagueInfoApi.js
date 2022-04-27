
import { API_KEY } from '../Commons/API_KEY';
const axios = require('axios');


export const summonerLeagueInfo = async (req , res) => {
  console.log("summorInfo1");
  const id = encodeURI(req.params.summonerId);
    try{
      const response = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`)
      const data = response.data
      console.log("summorInfo2");
      return res.status(200).json({data})
    }catch(error){
      return res.status(400).json({message:"없는 닉네임입니다."});
    }
}
