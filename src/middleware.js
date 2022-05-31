import {sign, verify} from "./Libraries/jwt"

export const authUser = async (req, res, next) =>{
    //인증이 필요한 곳에 미들웨어 적용
    if(req.session.user){
        console.log("로그인 상태");
    }else{
        console.log("비로그인상태");
    }

    next();
}