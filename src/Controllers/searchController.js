// import { getSummonerBasicData } from '../Commons/api/apiHandler';
import { API_KEY } from '../Commons/API_KEY';
const axios = require('axios');
export const summonerData = async (req , res) => {
  const name = encodeURI(req.params.name)
  // const res = getSummonerBasicData(name);
  const response = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`)
  .then((res) => {
    return res.data;
  })
  .catch((error) => {
    console.log(error);
  })
  const summonerInfo = {
    data: response,
    
  }
  // res.send('name')
  return res.status(200).json({ summonerInfo })
}