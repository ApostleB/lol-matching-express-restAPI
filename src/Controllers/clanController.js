import db from "../db";

export const clanHome = async (req, res) => {
  const conn = await db();
  try{
    const clan = await conn.query(`CALL Get_Clans()`);
    // console.log("clan",clan);
    console.log("실행");
    res.status(200).json(clan[0])
  }catch(err){
    // console.log(err);
    console.log("에러");
    res.status(400).json({message:"API 조회에 실패했습니다."})
  }finally{
    conn.release();
    return ;
  }
}