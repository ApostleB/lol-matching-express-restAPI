import {sign, verify} from "../Libraries/jwt";


export const login = async (req, res) => {
    let result = null;
    
    const {
        email, password
    } = req.body;

    //DB정보 조회 후 user에 넣음
    const user ={
        "email": '1',
        "password": '2'
    }
    
    try{
        //user의 id, email을 통해 토큰 생성 token, refreshToken
        const jwtToken = await sign(user);
        console.log("1. token: ", jwtToken.token);
        console.log("2. refreshToken: ", jwtToken.refreshToken);

        return res.send({
            email: email,
            password: password,
            accessToken: jwtToken
        });
    }catch(err){
        console.log("에러 : ",err);
    }


}