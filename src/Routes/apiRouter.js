import express from "express";

import { duoHome } from "../Controllers/duoController"
import { summonerData } from "../Controllers/searchController";
import { login } from "../Controllers/userController"

import { authUser } from "../middleware";
const apiRouter = express();
apiRouter.get("/duo", authUser, duoHome);
apiRouter.get("/duo/:name", summonerData)
apiRouter.post('/login', login )

export default apiRouter;