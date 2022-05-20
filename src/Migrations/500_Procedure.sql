#source C:/MyApp/project/src/Migrations/500_Procedure.sql;

DROP PROCEDURE IF EXISTS Get_Mates;
DELIMITER $$
CREATE PROCEDURE Get_Mates()
BEGIN
    SELECT * FROM Mates;
END $$
DELIMITER ;



DROP PROCEDURE IF EXISTS Post_Mate;
DELIMITER $$
CREATE PROCEDURE Post_Mate(
    IN PSeekerName VARCHAR(128),
    IN PApplicantName VARCHAR(128),
    IN PContent VARCHAR(128),
    IN PTier INT,
    IN PDuoType INT,
    IN PLine INT,
    IN PWin INT,
    IN PLose INT
)
BEGIN
    DECLARE DSeekerName VARCHAR(128);

    SELECT PSeekerName
    INTO DSeekerName
    FROM mates
    WHERE SeekerName = PSeekerName;

    IF DSeekerName IS NULL THEN
        INSERT INTO mates (SeekerName, ApplicantName, Content, Tier, DuoType, Line, Win, Lose )
        VALUES (PSeekerName, PApplicantName, PContent, PTier, PDuoType, PLine, PWin,PLose);
        SELECT * FROM mates WHERE SeekerName=PSeekerName;
    ELSE
        SIGNAL SQLSTATE 'FB000' SET MYSQL_ERRNO=10001, MESSAGE_TEXT = 'ERROR! DATA Duplicate';
    END IF;

      
END $$
DELIMITER ;


DROP PROCEDURE IF EXISTS Applicant_Mate;
DELIMITER $$
CREATE PROCEDURE Applicant_Mate(
    IN PMateId INT,
    IN PApplicantName VARCHAR(128)
)
BEGIN
    DECLARE DMateId INT DEFAULT NULL;
    DECLARE DApplicantName VARCHAR(128);

    SELECT Id
    INTO DMateId
    FROM mates
    WHERE Id = PMateId;

    IF DMateId IS NULL THEN
        SIGNAL SQLSTATE 'FB000' SET MYSQL_ERRNO=10003, MESSAGE_TEXT = 'ERROR! NO DATA';
    ELSE
        UPDATE Mates SET ApplicantName = PApplicantName WHERE Id = DMateId;
    END IF;

    SELECT * 
    FROM mates
    WHERE Id = PMateId;

END $$
DELIMITER ;



DROP PROCEDURE IF EXISTS Delete_Mate;
DELIMITER $$
CREATE PROCEDURE Delete_Mate(
    IN PMateId INT
)
BEGIN
    DECLARE DMateId INT DEFAULT NULL;

    SELECT Id
    INTO DMateId
    FROM Mates
    WHERE Id = PMateId;

    IF DMateId IS NULL THEN
        SIGNAL SQLSTATE 'FB000' SET MYSQL_ERRNO=10003, MESSAGE_TEXT = 'ERROR! NO DATA';
    ELSE
        DELETE FROM Mates WHERE Id = DMateID;
    END IF;    

END $$
DELIMITER ;

