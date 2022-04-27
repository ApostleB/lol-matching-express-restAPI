USE express;

#Mates테이블이 있다면 지워라
DROP TABLE IF EXISTS Mates;

CREATE TABLE IF NOT EXISTS Mates
(
    Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    SeekerName VARCHAR(128) NOT NULL,
    ApplicantName VARCHAR(128) DEFAULT NULL, 
    Content VARCHAR(128) NOT NULL,
    Tier INT NOT NULL,
    DuoType INT NOT NULL,
    Line INT NOT NULL,
    Win INT DEFAULT NULL,
    Lose INT DEFAULT NULL,
    #ReportCount DEFAULT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE  CURRENT_TIMESTAMP,
);

INSERT INTO Mates(
    SeekerName, ApplicantName, Content,Tier, DuoType,Line, CreatedAt, UpdatedAt
)
VALUES (
    "1", "2", 'DUO GUHAM', 0, 0,0, '2022-03-23 00:00:00', '2022-03-23 00:00:00'
);

INSERT INTO Mates(
    SeekerName, ApplicantName, Content,Tier, DuoType,Line, CreatedAt, UpdatedAt
)
VALUES (
    "2", "NULL", 'Mate Duo', 0,0,0, '2022-03-23 00:00:00', '2022-03-23 00:00:00'
);

INSERT INTO Mates(
    SeekerName, ApplicantName, Content,Tier, DuoType,Line, CreatedAt, UpdatedAt
)
VALUES (
    "3", "NULL", 'NOT TROLL', 0,0,0, '2022-03-23 00:00:00', '2022-03-23 00:00:00'
);