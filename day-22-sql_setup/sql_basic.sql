create database school_erp;

USE school_erp;

create table teachers(
teacher_id INT PRIMARY KEY,
first_name VARCHAR(50),
subject VARCHAR(100)
);

INSERT INTO teachers
VALUES
(1, 'Rohan', 'Web Development');

SELECT * FROM teachers;

CREATE TABLE students(
student_id INT PRIMARY KEY,
first_name VARCHAR(50),
birth_date DATE,
is_active BOOLEAN,
tuition_fees DECIMAL(8, 2)
);

INSERT INTO students
(student_id,first_name,birth_date,is_active,tuition_fees)
VALUES
(2, 'Saif', '2005-06-18', FALSE, 11000.75);

SELECT * FROM students;

