#source /home/project/src/Migrations/500_Procedure.sql;

DROP PROCEDURE IF EXISTS Get_Mates;
DELIMITER $$
CREATE PROCEDURE Get_Mates()
BEGIN
    SELECT * FROM Mates;
END $$
DELIMITER ;

DROP PROCEDURE IF EXISTS User_Login;
DELIMITER $$
CREATE PROCEDURE User_Login(
    IN PEmail VARCHAR(128), 
    IN PPassword  VARCHAR(512)
)
BEGIN
    SELECT Email, Name, LOLName, Contact, GoodCount, BadCount, CreatedAt, UpdatedAt
    FROM Users
    WHERE Email = PEmail AND Password = PPassword;
END $$
DELIMITER ;



DROP PROCEDURE IF EXISTS User_Register;
DELIMITER $$
CREATE PROCEDURE User_Login(
    IN PEmail VARCHAR(128), 
    IN PName VARCHAR(64),
    IN LOLName VARCHAR(64),
    IN Contact VARCHAR(128),
    IN GoodCount

    IN PPassword  VARCHAR(512)
)
BEGIN
    SELECT Email, Name, LOLName, Contact, GoodCount, BadCount, CreatedAt, UpdatedAt
    FROM Users
    WHERE Email = PEmail AND Password = PPassword;
    
END $$
DELIMITER ;




