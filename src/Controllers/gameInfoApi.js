import { customAsync } from '../Commons/api/asyncUtils';
import { API_KEY } from '../Commons/API_KEY';
const axios = require('axios');

export const gameInfo = async (req , res) => {
  const {
    puuid , start , count
  } = req.params;
  const data = [];
  try{
    const matchDetail = [];
    const getMatches = axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${API_KEY}`);
    console.log("gameInfoAPI1");
    const setMatchDetail = async (matches) => {
      await Promise.all(matches.map(async (match)=>{
        await axios
        .get(`https://asia.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${API_KEY}`)
        .then(each => {
          const {metadata , info} = each.data;
            matchDetail.push({
              participantId: metadata.participants.findIndex((idData) => idData === puuid),
              metadata: metadata,
              info:info
            })
            console.log("gameInfoAPI2");
            console.log("인포 실행됨");
        }).catch((error)=>{
            console.log("에러남")
        })
      }))
      console.log("gameInfoAPI3");

      return matchDetail;
      
    }
    return getMatches.then(async fetchMatches => {
      const matches = fetchMatches.data;
      Promise.all(
        [setMatchDetail(matches)])
        .then((matchDetails)=>{
          // console.log("넘어온 데이터",matchDetails)
          const data = matchDetails.data
          return res.status(200).json({matchDetails})
        })
    })
  }catch(error){
    console.log("캐치에러")
    return res.status(400).json({message:"캐치에러"});
  }
  
}





// const gameInfo = req.params.gameInfo;
  //   try{
  //     const response = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${gameInfo}?api_key=${API_KEY}`)
  //     const data = response.data;
  //     return res.status(200).json({data})
  //   }catch(error){
  //     return res.status(400).json({message:"없는 닉네임입니다."});
      
  //   }