import db from "../db";

export const test = async (req, res) => {
  const conn = await db();
  try {
    const test = await conn.query(`SELECT * FROM Users`);
    console.log("test", test[0]);
    res.status(200).json(test)
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "API 조회에 실패했습니다."
    })
  } finally {
    conn.release();
    return;
  }
}
export const duoHome = async (req, res) => {
  const conn = await db();
  try {
    const duo = await conn.query(`CALL Get_Mates()`);
    console.log("duo", duo[0]);
    res.status(200).json(duo[0])
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "API 조회에 실패했습니다."
    })
  } finally {
    conn.release();
    return;
  }
}

export const duoReg = async (req, res) => {
  const { 
    SeekerName,
    ApplicantName,
    Content,
    Tier,
    DuoType,
    Line,
    Win,
    Lose,
    Password,
    IsMic
  } = req.body;
  const conn = await db();
  try {
    const addDuo = await conn.query(`CALL Post_Mate(?,?,?,?,?,?,?,?,?,?)`,[ SeekerName, ApplicantName, Content, Tier, DuoType, Line, Win, Lose, Password, IsMic ]);
    // console.log("addDuo", addDuo[0]);
    res.status(200).json(addDuo[0][0]);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "업로드에 실패했습니다."
    })
  } finally {
    conn.release();
    return;
  }
}

export const deleteMate = async (req, res) => {
  const mateId = Number(req.query.mateId);
  console.log(mateId);
  if(!mateId){
    return res.status(400).json({message: "MateId가 없습니다."});
  }
  const conn = await db();
  try {
    const deleteMate = await conn.query(`CALL Delete_Mate(?)`,[mateId]);
    console.log("Mate가 삭제되었습니다.");
    res.status(200).json({message:"삭제가 완료되었습니다."});
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "삭제에 실패했습니다. "+ err.text
    })
  } finally {
    conn.release();
    return;
  }
}

// export const applicantDuo = async (req, res) => {
//   const {
//     MateId,
//     ApplicantName
//   } = req.body;
//   console.log("MATEID :", MateId);
//   console.log("APPLICANT NAME :", ApplicantName);
  
//   const conn = await db();
//   try {
//     const applicant = await conn.query( `CALL Applicant_Mate(?,?)`,[ MateId, ApplicantName ]);
//     console.log("applicant", applicant[0]);
//     res.status(200).json(applicant[0][0]);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       message: `듀오 신청 실패 ${err.text? err.text : "NULL ERROR"}`
//     })
//   } finally {
//     conn.release();
//     return;
//   }
// }