#source /home/project/src/Migrations/500_Procedure.sql;

DROP PROCEDURE IF EXISTS Get_Mates;
DELIMITER $$
CREATE PROCEDURE Get_Mates()
BEGIN
    SELECT * FROM Mates;
END $$
DELIMITER ;


