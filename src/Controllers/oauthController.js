const axios = require('axios');

export const naverLogin = async (req,res) => {
  
  const {token} = req.body
  try{
    console.log(req.body);
    const userData = await axios.get('https://openapi.naver.com/v1/nid/me', {
        headers : {
            'Authorization' : `Bearer ${token}`,
        }
    })
    const data = userData.data
    console.log(userData);
    return res.status(200).json(JSON.stringify(data));
  }catch(error){
    console.log("에러",error);
    return res.status(400).json({message:"에러"});
  }
}