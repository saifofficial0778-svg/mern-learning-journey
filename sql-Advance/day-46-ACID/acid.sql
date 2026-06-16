use college;
drop table student;
-- 1. Students Table
CREATE TABLE students (
    student_id VARCHAR(10) PRIMARY KEY,
    student_name VARCHAR(50),
    pending_fees INT,
    fees_paid INT,
    -- Interviewer Trick se bachne ke liye Constraint: Pending fees kabhi negative nahi ho sakti
    CONSTRAINT check_pending_fees CHECK (pending_fees >= 0)
);

-- 2. College Accounts Table
CREATE TABLE college_accounts (
    account_id INT PRIMARY KEY,
    account_name VARCHAR(50),
    total_balance INT
);
-- Students mein Rahul ka data dalte hain
INSERT INTO students (student_id, student_name, pending_fees, fees_paid)
VALUES ('STU101', 'Rahul', 15000, 20000);

select * from students;
select * from college_accounts;

-- College ka account balance set karte hain
INSERT INTO college_accounts (account_id, account_name, total_balance)
VALUES (1, 'Main tuition fee account', 500000);

-- Transaction shuru karte hain
BEGIN;

-- Ek TRY block ki tarah socho (Hum safe side le kar chal rahe hain)
SAVEPOINT before_payment; -- Ek checkpoint bana diya safe side ke liye

-- Step 1: Student ki pending fees kam karo aur paid badhao
UPDATE students 
SET pending_fees = pending_fees - 5000, 
    fees_paid = fees_paid + 5000
WHERE student_id = 'STU101';

-- Step 2: College ke main account mein cash balance badhao
UPDATE college_accounts 
SET total_balance = total_balance + 5000
WHERE account_name = 'Main tuition fee account';

-- -------------------------------------------------------------
-- ERROR HANDLING (INTERVIEW & ERP ESSENTIAL):
-- -------------------------------------------------------------
-- Agar dono step bina kisi error ke chal gaye:
COMMIT;

-- LEKIN, agar step 2 fail ho gaya (man lo account name galat tha ya network udd gaya):
-- Database background mein automatic ya humare trigger se ye karega:
-- ROLLBACK TO before_payment; -- Ya fir direct pure transaction ka ROLLBACK:
-- ROLLBACK;
SET SQL_SAFE_UPDATES = 0;
ROLLBACK;
