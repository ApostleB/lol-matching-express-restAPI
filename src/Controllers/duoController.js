import db from "../db";

export const duoHome = async (req, res) => {
  const conn = await db();
  try{
    const duo = await conn.query(`CALL Get_Mates()`);
    
    console.log("duo", duo[0]);
    res.status(200).json(duo[0])
  }catch(err){
    console.log(err);
    res.status(400).json({message:"API 조회에 실패했습니다."})
  }finally{
    conn.release();
    return ;
  }
}

export const duoReg = async (req, res) => {
  
}