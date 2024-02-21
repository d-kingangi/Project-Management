CREATE OR ALTER PROCEDURE createProject(
    @project_id VARCHAR(100),
    @title VARCHAR(200), 
    @descr VARCHAR(200), 
    @user_assigned VARCHAR(200),
    @end_date VARCHAR(200)
    )
AS
BEGIN 
    INSERT INTO Projects(project_id, title, descr, user_assigned, end_date)
    VALUES(@project_id, @title, @descr, @user_assigned, @end_date)
END