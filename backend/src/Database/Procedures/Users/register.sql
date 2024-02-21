CREATE PROCEDURE registerUser(
    @user_id VARCHAR(200), 
    @userName VARCHAR(200),
    @email VARCHAR(200),
    @password VARCHAR(200)
    )
AS
BEGIN 
    INSERT INTO Users(user_id, userName, email, password)
    VALUES(@user_id, @userName, @email, @password)
END