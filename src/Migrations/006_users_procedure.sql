#source C:/MyApp/project/src/Migrations/006_users_procedure.sql;

DROP PROCEDURE IF EXISTS User_Login;
DELIMITER $$
CREATE PROCEDURE User_Login(
    IN PEmail VARCHAR(128),
    IN PPassword VARCHAR(512)
)
BEGIN
    DECLARE DUserId INT DEFAULT NULL;
    DECLARE DEmail VARCHAR(128) DEFAULT NULL;
    DECLARE DName VARCHAR(64) DEFAULT NULL;
    DECLARE DLOLName VARCHAR(64) DEFAULT NULL;

    SELECT Id, Email, Name, LOLName
    INTO DUserId, DEmail, DName, DLOLName
    FROM Users
    WHERE Email=PEmail AND Password=PPassword;

    IF DUserId IS NULL THEN
        SIGNAL SQLSTATE 'FB001' SET MYSQL_ERRNO=10000, MESSAGE_TEXT = '계정정보를 확인해 주세요.';
    ELSE
        SELECT DUserId AS Id, DEmail AS Email, DName AS Name, DLOLName AS LOLName;
    END IF;
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