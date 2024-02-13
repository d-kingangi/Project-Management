CREATE OR ALTER PROCEDURE getOneProject(@project_id VARCHAR(100))
AS
BEGIN   
    SELECT * FROM Projects WHERE project_id = @project_id
END

-- SELECT * FROM Users