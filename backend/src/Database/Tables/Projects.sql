CREATE TABLE Projects(
    project_id VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL, 
    descr VARCHAR(200) NOT NULL, 
    user_assigned VARCHAR(200),
    end_date VARCHAR(200) NOT NULL,
)

-- DROP TABLE Projects
SELECT * FROM Projects

-- ALTER TABLE Projects ADD isCompleted BIT Default 0

-- ALTER TABLE Projects
-- ADD PRIMARY KEY (project_id);

-- ALTER TABLE Projects
-- ADD CONSTRAINT FK_Projects_Users
-- FOREIGN KEY (user_assigned) REFERENCES Users(user_id)


-- ALTER TABLE Projects
-- ALTER COLUMN user_assigned VARCHAR(100);

-- DELETE FROM Projects
-- WHERE title IN ('Carnival', 'Singapore');

