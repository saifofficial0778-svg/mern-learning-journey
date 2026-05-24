DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id INT PRIMARY KEY,                 -- PRIMARY KEY: Har student ki ID unique honi chahiye
    name VARCHAR(50) NOT NULL,          -- NOT NULL: Name khali nahi chhod sakte
    age INT DEFAULT 18  -- DEFAULT: Agar age na di jaye, toh 18 pakad lega
);
INSERT INTO students (id, name, age) 
VALUES 
(1, 'Aman', 21),
(2, 'Rahul', DEFAULT), -- SQL samajh jayega ki yahan default value daalni hai!
(3, 'Priya', 22);

SELECT * from students;

select * from students
where age >20;