#source /home/project/src/Migrations/008_mates_procedure.sql;

DROP PROCEDURE IF EXISTS Get_Mates;
DELIMITER $$
CREATE PROCEDURE Get_Mates()
BEGIN
    SELECT * FROM Mates;
END $$
DELIMITER ;