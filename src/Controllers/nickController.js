import { API_KEY } from '../Commons/API_KEY';
const axios = require('axios');

export const checkName = async (req , res) => {
  const name = encodeURI(req.params.checkName);
    try{
      const response = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`)
      const getData = response.data
      // return res.status(200).json({message:"확인 되었습니다."})
      return res.status(200).json({getData})
    }catch(error){
      return res.status(400).json({message:"없는 닉네임입니다."});
    }
}