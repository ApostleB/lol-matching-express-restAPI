#source /home/project/src/Migrations/006_users_procedure.sql;

DROP PROCEDURE IF EXISTS User_Login;
DELIMITER $$
CREATE PROCEDURE User_Login(
    IN PEmail VARCHAR(128),
    IN PPassword VARCHAR(512)
)
BEGIN
    DECLARE DUserId INT DEFAULT NULL;

    SELECT Id, Email, Name 
    FROM Users
    WHERE Email=PEmail AND Password=PPassword;

END $$
DELIMITER ;


DROP PROCEDURE IF EXISTS User_Register;

DELIMITER $$

CREATE PROCEDURE User_Register(
    IN PEmail VARCHAR(128),
    IN PName VARCHAR(64),
    IN PLOLName VARCHAR(64),
    IN PPassword VARCHAR(512),
    IN PContact VARCHAR(13)
)
BEGIN
    DECLARE DMessage VARCHAR(128);
    DECLARE DName VARCHAR(128);
    DECLARE DEmail VARCHAR(128);

    INSERT INTO Users(
        Email, Name, LOLName, Password, Contact
    )
    VALUES (
        PEmail, PName, PLOLName, PPassword, PContact
    );

    SELECT LAST_INSERT_ID() as Id, PEmail as Email, PName as Name, PLOLName as LOLName;

    #SELECT 'Register Success', PEmail
    #INTO DMessage, DEmail;

    #SET DMessage = 'Register Success';

END $$
DELIMITER ;