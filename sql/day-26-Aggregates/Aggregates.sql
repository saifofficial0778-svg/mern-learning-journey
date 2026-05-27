use school_erp;
drop table students ;

-- 1. Students Table
CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(50) NOT NULL
);

-- 2. Subjects Table
CREATE TABLE subjects (
    subject_id INT PRIMARY KEY ,
    subject_name VARCHAR(50) NOT NULL
);

CREATE TABLE students_subjects(
	student_id INT ,
    subject_id INT,
    enrollment_date DATE DEFAULT (CURRENT_DATE),
    
    FOREIGN KEY (student_id) references	students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE CASCADE,
    
    PRIMARY KEY (student_id,subject_id)
);
INSERT INTO students
(student_name)
values
("Amit"),
("Rahul");
INSERT INTO subjects 
 VALUES 
 (101,'JavaScript'), (102,'SQL');
select * from subjects;


-- Entry in Junction Table
INSERT INTO students_subjects (student_id, subject_id) VALUES 
(1, 101), -- Amit takes JavaScript
(1, 102), -- Amit takes SQL
(2, 101); -- Rahul takes JavaScript

SELECT s.student_name , sub.subject_name
from students_subjects ss
JOIN students s ON ss.student_id=s.student_id
JOIN subjects sub ON ss.subject_id=sub.subject_id;

CREATE  TABLE fee_payment(
	payment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id int,
    class varchar(10),
    amount_paid INT
);

INSERT INTO fee_payment
values
(1,101,"10th",5000),
(2,102,"12th",8000),
(3,103,"10th",4500),
(4,104,"11th",6000),
(5,105,"12th",8500);

select COUNT(payment_id) from fee_payment;

select SUM(amount_paid) from fee_payment;

select AVG(amount_paid) from fee_payment;

select MAX(amount_paid) from fee_payment;

select MIN(amount_paid) from fee_payment;

select class, sum(amount_paid) as total_collection
from fee_payment
group by class;


select class, sum(amount_paid) as total_collection
from fee_payment
group by class
having total_collection >=9000;






