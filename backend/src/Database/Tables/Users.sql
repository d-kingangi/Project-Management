-- CREATE TABLE Users(
--     user_id VARCHAR(100) NOT NULL, 
--     userName VARCHAR(100) NOT NULL, 
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password VARCHAR(200) NOT NULL, 
--    isWelcomed BIT Default 0
-- )
-- ALTER TABLE Users ADD isWelcomed BIT Default 0
-- ALTER TABLE Users ADD isAdmin BIT Default 0
-- SELECT * FROM Users
-- UPDATE Users SET isWelcomed = 0

-- UPDATE Users set isAdmin = 1 WHERE email = 'kingangiduncan47@gmail.com'


-- ALTER TABLE Users
-- ADD PRIMARY KEY (user_id);

-- ALTER TABLE Users
-- ADD project_assigned VARCHAR(100);

ALTER TABLE Users
ADD CONSTRAINT FK_Users_Projects
FOREIGN KEY (project_assigned) REFERENCES Projects(project_id)
