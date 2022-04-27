import {sign, verify} from "../Libraries/jwt";
import db from "../db"


export const login = async (req, res) => {
    const {
        email, password
    } = req.body;

    if(!(email,password)){
        return res.status(400).json({message:"항목을 모두 입력해주세요."})
    }

    //DB정보 조회 후 user에 넣음
    const conn = await db();
    try{
        const login = await conn.query(`CALL User_Login(?, ?)`,[email, password]);
        //user의 id, email을 통해 토큰 생성 token, refreshToken
        const user = {
            id:login[0][0].Id,
            email:login[0][0].Email
        }
        const jwtToken = await sign(user);
        console.log("1. token: ", jwtToken.token);
        console.log("2. refreshToken: ", jwtToken.refreshToken);
        
        return res.status(200).json(jwtToken);
    }catch(err){
        console.log("에러 : ",err);
        if(err.sqlState === "FB001"){
            return res.status(400).json({message:err.text});
        }
        return res.status(400).json({message:"잠시후 다시 시도해주세요."});
    }
}
