use college;
-- 1. Table Create Karna
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(50),
    department_id INT,
    salary DECIMAL(10,2)
);

-- 2. Dummy Data Insert Karna
INSERT INTO employees VALUES (1, 'Rahul', 10, 70000);
INSERT INTO employees VALUES (2, 'Rohit', 10, 50000);
INSERT INTO employees VALUES (3, 'Amit', 20, 40000);
INSERT INTO employees VALUES (4, 'Priya', 20, 60000);

CREATE TABLE departments (
    id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

-- Departments Mein Data Insert Karte Hain
INSERT INTO departments VALUES (10, 'IT Support');
INSERT INTO departments VALUES (20, 'Human Resources');

-- 3. Correlated Subquery
SELECT *
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary) 
    FROM employees 
    WHERE department_id = e.department_id
);

-- 1. View Banana (Complex Query ko ek naam de dena)
CREATE VIEW vw_Employee_Salary_Report AS
SELECT e.employee_id, e.name, e.salary, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE e.salary > 10000;

-- 2. View Ko Use Kaise Karna Hai? (Bilkul normal table ki tarah)
SELECT * FROM vw_Employee_Salary_Report;

-- 3. Agar View ko delete karna ho:
DROP VIEW vw_Employee_Salary_Report;


DELIMITER //
CREATE procedure GetEmployeeDetails(IN emp_id INT)
BEGIN
SELECT e.employee_id, e.name, e.salary, d.department_name
    FROM employees e
    JOIN departments d ON e.department_id = d.id
    WHERE e.employee_id = emp_id;
END//

DELIMITER ;

call GetEmployeeDetails(4);

DROP PROCEDURE GetEmployeeDetails;