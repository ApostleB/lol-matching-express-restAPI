//https://velog.io/@jguuun/NodeJWT
//https://velog.io/@neity16/NodeJS-JWT-Token-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
import jwt from "jsonwebtoken";
import randToken from "rand-token";
import jwtConfig from "../Config/jwtConfig"
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

export const sign = async (user) =>{
    const payload = {
        idx: user.userIdx,
        email: user.email,
    }
    const result = {
        token: jwt.sign(payload, jwtConfig.secretKey, jwtConfig.option),
        refreshToken: jwt.sign(payload, jwtConfig.refreshSecretKey, jwtConfig.refreshOption)    //DB저장 후 재발급시 대조
    };
    return result;
}

export const verify = async (token) => {
    let decoded;
    try{
        console.log("token:::",token, "end")
        decoded = jwt.verify(token, jwtConfig.secretKey);
        return decoded;
    }
    catch(err){
        console.log(err)
        if(err.message === 'jwt expired'){
            console.log('expires token');
            return TOKEN_EXPIRED;
        }else if (err.message === 'invalid token') {
            console.log('invalid token');
            console.log(TOKEN_INVALID);
            return TOKEN_INVALID;
        } else {
            console.log("invalid token");
            return TOKEN_INVALID;
        }
    }
}