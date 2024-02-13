CREATE PROCEDURE updateProject(
    @project_id VARCHAR(100),
    @title VARCHAR(200), 
    @descr VARCHAR(200), 
    @user_assigned VARCHAR(200), 
    @end_date VARCHAR(200))
AS
BEGIN
    UPDATE Projects SET  
        title = @title, 
        descr = @descr, 
        user_assigned = @user_assigned, 
        end_date = @end_date
    WHERE project_id = @project_id
END


