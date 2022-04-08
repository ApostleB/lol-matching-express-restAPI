USE express;

#Users테이블이 있다면 지워라
DROP TABLE IF EXISTS Users;

CREATE TABLE IF NOT EXISTS Users
(
    Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(128) NOT NULL UNIQUE,
    Name VARCHAR(64) NOT NULL,
    LOLName VARCHAR(64) DEFAULT NULL,
    Password VARCHAR(512) NOT NULL,
    Contact VARCHAR(13) NOT NULL,
    GoodCount INT DEFAULT 0,
    BadCount INT DEFAULT 0,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE  CURRENT_TIMESTAMP
);

INSERT INTO Users(Email, Name, Password, Contact, CreatedAt, UpdatedAt)
VALUES (
    'test', 'jung', '123', '010-1234-5678', '2022-03-23 00:00:00', '2022-03-23 00:00:00'
);

INSERT INTO Users(Email, Name, Password, Contact, CreatedAt, UpdatedAt)
VALUES (
    'bad@bad', 'baduser', '123', '010-4444-4444', '2022-03-23 00:00:00', '2022-03-23 00:00:00'
);

INSERT INTO Users(Email, Name, Password, Contact, CreatedAt, UpdatedAt)
VALUES (
    'mynameisGood@good', 'gooduser', '123', '010-4444-4444', '2022-03-23 00:00:00', '2022-03-23 00:00:00'
);