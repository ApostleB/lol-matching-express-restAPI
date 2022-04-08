import express from "express";
import {sign, verify} from "../Libraries/jwt";
import { duoHome } from "../Controllers/duoController"
import { summonerData } from "../Controllers/searchController";
const apiRouter = express();
apiRouter.get("/duo",duoHome);
apiRouter.get("/duo/:name", summonerData)
apiRouter.post('/login', async (req, res)=>{
    let result = null;
    const user ={
        "email": '1',
        "password": '2'
    }
    const {
        email, password
    } = req.body;
    console.log(user)
    console.log(req.body)
    console.log(user.email === email)
    if(user.email === email){
        if(user.password === password){
            const userData = {
                "idx":"1",
                email
            };
            result = await sign(userData);
        }
    }
    console.log(result);
    console.log(verify(result.token));
})

export default apiRouter;