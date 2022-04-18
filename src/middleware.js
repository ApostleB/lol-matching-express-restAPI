import {sign, verify} from "./Libraries/jwt"

export const authUser = async (req, res, next) =>{
    //인증이 필요한 곳에 미들웨어 적용
    const token = req.headers.token;
    console.log(token);
    if(!token){
        console.log("토큰 없음");
    }

    //decoded
    const user = await verify(token);


    next();
}