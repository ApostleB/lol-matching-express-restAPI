import db from "../db";

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
    Lose
  } = req.body;
  const conn = await db();
  try {
    const addDuo = await conn.query(`CALL Post_Mate(?,?,?,?,?,?,?,?)`,[ SeekerName, ApplicantName, Content, Tier, DuoType, Line, Win, Lose ]);
    console.log("addDuo", addDuo[0]);
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