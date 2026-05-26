use school_erp;

CREATE TABLE classes (
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(50) NOT NULL,
    teacher_name VARCHAR(50)
);

drop table students;
CREATE TABLE students(
	student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(50) NOT NULL,
    class_id INT, -- Ye column dono ko jodega
    
    foreign key (class_id) references classes(class_id)
);

-- Pehle classes add kiye
INSERT INTO classes (class_name, teacher_name) 
VALUES ('Class 10', 'Sharma Ji'), 
       ('Class 11', 'Verma Ji');

-- Ab students add kiye (class_id ke sath)
INSERT INTO students (student_name, class_id) 
VALUES ('Rahul', 1),  -- Rahul hai Class 10 me (class_id = 1)
       ('Anjali', 1), -- Anjali bhi hai Class 10 me
       ('Amit', 2);   -- Amit hai Class 11 me (class_id = 2)
       
INSERT INTO students (student_name) 
VALUES ('Rohan');
select * from students;

delete from students
where student_id >3;

SELECT
students.student_name,
classes.class_name
from students
left JOIN classes
ON students.class_id=classes.class_id;

update students
set class_id=1
where student_id=8;
