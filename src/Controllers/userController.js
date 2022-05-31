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
        // const login = await conn.query(`CALL User_Login(?, ?)`,[email, password]);
        const login = await conn.query(`SELECT Id, Email, Name, LOLName FROM Users WHERE Email = ? AND Password = ?`,[email, password]);
        console.log(login);
        //user의 id, email을 통해 토큰 생성 token, refreshToken
        // const user = {
        //     id:login[0][0].Id,
        //     email:login[0][0].Email,
        //     name:login[0][0].Name,
        //     lolName:login[0][0].LOLName
        // }
        // req.session.user = user;
        
        // return res.status(200).json(user);
        return res.status(200).json(login);
    }catch(err){
        console.log("에러 : ",err);
        if(err.sqlState === "FB001"){
            return res.status(400).json({message:err.text});
        }
        return res.status(400).json({message:"잠시후 다시 시    도해주세요."});
    }
}

export const userInfo = async (req, res) => {
    
}
export const userInfoTest = async (req, res) => {
    
    const conn = await db();
    try{
        const test = await conn.query(`SELECT * FROM Users WHERE Id = ?`,[req.session.user.Id ?? 3])
        console.log(test[0][0]);
        return res.status(200).json(test)
    }catch(err){
        console.log(err);
    }
}