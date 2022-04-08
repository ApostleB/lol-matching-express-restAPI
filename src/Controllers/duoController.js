export const duoHome = (req, res) => {
  const duoList = {
    0:{
      "id": 1,
      "duoType": 0, // 0 : 모두 , 1:일반, 2:솔로, 3:자랭, 4:칼바람, 5:특별
      "tier": 0,  // 0 : 모두 9:챌 0 ~ 9
      "line": 0, // 0:any , 1: top, 2:mid, 3:jungle, 4:bottom, 5:support
      "Contents": "같이 할 사람 구해요.",
      "win": 5,
      "lose": 5,
      "ReportCount": 1,
      "created_at": "2022-04-08 00:00:00",
    },
    1:{
      "id": 2,
      "duoType": 0, 
      "tier": 9,  
      "line": 1, 
      "Contents": "같이 할 사람1",
      "win": 7,
      "lose": 3,
      "ReportCount": 0,
      "created_at": "2022-04-09 00:00:00",
    },
    2: {
      "id": 2,
      "duoType": 2,
      "tier": 2,
      "line": 2,
      "Contents": "같이 할 사람2",
      "win": 4,
      "lose": 6,
      "ReportCount": 0,
      "created_at": "2022-04-09 12:01:33",
    }
  }

  return res.status(200).json({duoList})
}