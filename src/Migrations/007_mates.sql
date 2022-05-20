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
    Win INT NOT NULL,
    Lose INT NOT NULL,
    Password VARCHAR(128) NOT NULL,
    IsMic BOOLEAN NOT NULL DEFAULT FALSE,
    #ReportCount DEFAULT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE  CURRENT_TIMESTAMP
);


INSERT INTO Mates(
    SeekerName, ApplicantName, Content,Tier, DuoType, Line, Win, Lose, Password, CreatedAt, UpdatedAt
)
VALUES (
    "FAKER", "2", 'DUO GUHAM', 0, 1, 0, 2, 0, "123", '2022-03-23 00:00:00', '2022-03-23 00:00:00'
);

INSERT INTO Mates(
    SeekerName, ApplicantName, Content,Tier, DuoType, Line, Win, Lose, Password, CreatedAt, UpdatedAt
)
VALUES (
    "Deft", "NULL", 'Mate Duo', 1, 2, 2, 3, 1, "password", '2022-03-23 00:00:00', '2022-03-23 00:00:00'
);

INSERT INTO Mates(
    SeekerName, ApplicantName, Content,Tier, DuoType, Line, Win, Lose, Password, CreatedAt, UpdatedAt
)
VALUES (
    "Pray", "NULL", 'NOT TROLL', 2, 3, 4, 2, 2, "123", '2022-03-23 00:00:00', '2022-03-23 00:00:00'
);