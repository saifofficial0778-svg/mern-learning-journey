CREATE DATABASE edusuite_db;
use edusuite_db;

-- 1. SCHOOLS TABLE (SaaS ki jaan - Multi-tenancy ke liye)
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_name VARCHAR(150) NOT NULL,
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. USERS TABLE (Central Authentication & Roles)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_id INT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'teacher', 'student') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
);

-- 3. CLASSES TABLE (Kaunsi class, kaunsa section)
CREATE TABLE classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_id INT NOT NULL,
    class_name VARCHAR(50) NOT NULL, -- e.g., 'Class 10'
    section VARCHAR(10) NOT NULL,    -- e.g., 'A'
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
);

-- 4. TEACHERS TABLE (Linked with Users 1:1)
CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    school_id INT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    specialization VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
);

-- 5. STUDENTS TABLE (Linked with Users 1:1 and Classes)
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    school_id INT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    roll_number INT NOT NULL,
    guardian_name VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
    FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE RESTRICT,
    -- Ek school ki ek class mein duplicate roll number nahi ho sakta!
    UNIQUE KEY unique_school_class_roll (school_id, class_id, roll_number)
);

-- 6. ATTENDANCE TABLE (Daily tracking)
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_id INT NOT NULL,
    student_id INT NOT NULL,
    date DATE NOT NULL,
    status ENUM('present', 'absent', 'leave') NOT NULL,
    remarks VARCHAR(255),
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    -- Ek student ki ek din mein ek hi attendance entry hogi
    UNIQUE KEY unique_student_date (student_id, date)
);

-- 7. FEES TABLE (Financial Ledger)
CREATE TABLE fees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_id INT NOT NULL,
    student_id INT NOT NULL,
    amount_paid DECIMAL(10, 2) NOT NULL,
    payment_date DATE NOT NULL,
    payment_mode ENUM('cash', 'online', 'cheque') NOT NULL,
    transaction_id VARCHAR(100) UNIQUE NULL,
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);
-- 8.Nayi Mapping Table Create Karo (student_class_mapping)
CREATE TABLE student_class_mapping (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_id INT NOT NULL,
    student_id INT NOT NULL,
    class_id INT NOT NULL,
    academic_year VARCHAR(20) NOT NULL, -- e.g., '2026-2027'
    status ENUM('active', 'promoted', 'detained') DEFAULT 'active',
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE RESTRICT,
    -- Ek saal mein ek student ek hi class mein ho sakta hai
    UNIQUE KEY unique_student_year (student_id, academic_year)
);


-- Pehle ek School insert karte hain (e.g., "Gyan Bhandar Public School")
INSERT INTO schools (school_name, address) 
VALUES ('Gyan Bhandar Public School', '123, Desi Street, Delhi');

-- Maan lete hain is school ki ID = 1 mili. Now create a Class (Class 10-A)
INSERT INTO classes (school_id, class_name, section) 
VALUES (1, 'Class 10', 'A'); -- assume class ID = 1

-- Ab 5 Students ke liye pehle USERS table mein entries karni hongi (Auth ke liye)
INSERT INTO users (school_id, email, password_hash, role) VALUES 
(1, 'rahul@gyan.com', 'hashed_pwd_1', 'student'),
(1, 'amit@gyan.com', 'hashed_pwd_2', 'student'),
(1, 'priya@gyan.com', 'hashed_pwd_3', 'student'),
(1, 'sneha@gyan.com', 'hashed_pwd_4', 'student'),
(1, 'vikram@gyan.com', 'hashed_pwd_5', 'student');

-- Ab inhi 5 Users ko STUDENTS table se link karke real student profile banate hain
-- (Assuming user IDs are 1, 2, 3, 4, 5 and class_id = 1)
INSERT INTO students (user_id, school_id, class_id, full_name, roll_number, guardian_name) VALUES 
(1, 1, 1, 'Rahul Kumar', 101, 'Ramesh Kumar'),
(2, 1, 1, 'Amit Sharma', 102, 'Suresh Sharma'),
(3, 1, 1, 'Priya Patel', 103, 'Dinesh Patel'),
(4, 1, 1, 'Sneha Singh', 104, 'Vijay Singh'),
(5, 1, 1, 'Vikram Rathore', 105, 'Jaipal Rathore');


select * from students
where school_id=1 AND roll_number=101;

INSERT INTO student_class_mapping (school_id, student_id, class_id, academic_year, status)
SELECT school_id, id, class_id, '2026-2027', 'active' FROM students;

-- Pehle foreign key constraint ko drop karna padega (MySQL default naam handle karega)
-- Agar constraint name alag ho toh error aane par 'students_ibfk_3' check kar lena
ALTER TABLE students DROP FOREIGN KEY students_ibfk_3;

-- Ab column ko permanently delete kar do
ALTER TABLE students DROP COLUMN class_id;

-- Mapping table par fast search ke liye index
CREATE INDEX idx_mapping_school_class_year ON student_class_mapping(school_id, class_id, academic_year);

-- Class 10-A (class_id = 1) ke saare bacchon ko nikalne ki query
SELECT s.id, s.full_name, s.roll_number, m.academic_year 
FROM students s
JOIN student_class_mapping m ON s.id = m.student_id
WHERE m.school_id = 1 AND m.class_id = 1 AND m.academic_year = '2026-2027';