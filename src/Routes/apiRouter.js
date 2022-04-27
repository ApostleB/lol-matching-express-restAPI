import express from "express";
import res from "express/lib/response";

import { duoHome, duoReg, applicantDuo } from "../Controllers/duoController"
import { summonerInfo } from "../Controllers/summonerinfoApi";
import { summonerLeagueInfo } from "../Controllers/leagueInfoApi";
import { gameInfo } from "../Controllers/gameInfoApi";
import { login } from "../Controllers/userController"
import { checkName } from "../Controllers/nickController"

import { authUser } from "../middleware";
const apiRouter = express();

//auth
apiRouter.post('/login', login );

//duo
apiRouter.get("/duo/rescue", duoHome);
apiRouter.post("/duo/reg", duoReg);
// apiRouter.post("/duo/applicant", applicantDuo);

//클랜

//커뮤니티

//


// apiRouter.get("/summoner/gameList/:gameInfo", gameInfo);

apiRouter.get("/register/:checkName", checkName);


//
apiRouter.get("/summoner/summonerInfo/by-name=:summonerName", summonerInfo);
apiRouter.get("/summoner/summonerLeagueInfo/:summonerId", summonerLeagueInfo);
apiRouter.get("/summoner/gameList/:puuid/:start/:count", gameInfo);


export default apiRouter;