CREATE OR ALTER PROCEDURE getProjects
AS
BEGIN
    SELECT * FROM Projects -- WHERE isDeleted = 0
END