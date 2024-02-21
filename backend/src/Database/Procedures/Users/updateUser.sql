CREATE PROCEDURE updateUser(
    @user_id VARCHAR(200),
    @userName VARCHAR(200), 
    @email VARCHAR(200),
    @password VARCHAR(100))
AS
BEGIN
    UPDATE Users SET 
        userName=@userName, 
        email=@email, 
        password=@password
    WHERE user_id = @user_id
END