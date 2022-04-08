import { API_KEY, PATH } from "../API_KEY";
const axios = require('axios');

export const getSummonerBasicData = (summonerName) => {
  return axios
  .get(`${PATH.KR_RIOT}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
  .then(response => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          data: response.data
        },
        console.log(response.data)
      )
    }
  })
  .catch((error) => {
    console.log(error);
  });
}
export const getSummonerInfo = (summonerDataId) => {
//   const summonerDataId = summonerDataId;
//   return axios
//   .get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerDataId}?api_key=${API_KEY}`)
//   .then(response => {
//     return {
//       statusCode:200,
//       body: JSON.stringify(
//         {
//           data:response.data
//         },
//       )
//     }
//   });
// }

// export const getSummonerRecordList = (puuid, start, count) => {
//   return axios
//   .get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${API_KEY}`)
//   .then(response => {
//     return {
//       statusCode: 200,
//       body: JSON.stringify(
//         {
//           data: response.data
//         },
//       )
//     }
//   });
// };

// export const getSummonerRecordInfo = (recordList) => {
//   return axios
//   .get(`https://asia.api.riotgames.com/lol/match/v5/matches/${recordList}?api_key=${API_KEY}`)
//   .then(response => {
//     return {
//       statusCode: 200,
//       body: JSON.stringify(
//         {
//           data: response.data
//         },
//       )
//     }
//   });
// };

// // export const getRecentChampion = (accountId:string,summonerName:string) => {
// //    return api.get(`/marcus-gg/summoner/championInfo/by-account/${accountId}/${summonerName}`);
// // };

// // export const getDetailGameList = (accountId:string,summonerName:string,endIndex = 10) => {
// //    return api.get(`/marcus-gg/summoner/detailGameInfo/by-account/${accountId}/${summonerName}/${endIndex}`)
// // }

// export const getChampionInfo = () => {
//   return api.get(`http://ddragon.leagueoflegends.com/cdn/10.1.1/data/ko_KR/champion.json`);
// };
// export const getSpellInfo = () => {
//   return api.get(`https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/summoner.json`);
// }