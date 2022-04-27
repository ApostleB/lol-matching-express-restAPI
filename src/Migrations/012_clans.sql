USE express;

#Clans테이블이 있다면 지워라
DROP TABLE IF EXISTS Clans;

CREATE TABLE IF NOT EXISTS Clans(
    Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    MasterId INT NOT NULL,
    ClanName VARCHAR(128) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(MasterId) REFERENCES Users(Id) ON DELETE CASCADE
);
INSERT INTO Clans(
    MasterId, ClanName, CreatedAt
)
VALUES (
    1, 'MY LOL CLANS','2022-03-23 00:00:00'
);

INSERT INTO Clans(
    MasterId, ClanName, CreatedAt
)
VALUES (
    2, 'Winner Clan','2022-03-23 00:00:00'
);

INSERT INTO Clans(
    MasterId, ClanName, CreatedAt
)
VALUES (
    3, 'IM FRONT MAN','2022-03-23 00:00:00'
);


