CREATE DATABASE IF NOT EXISTS edusuite_db;
USE edusuite_db;

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

-- 5. STUDENTS TABLE (Linked with Users 1:1)
-- Note: Isme se class_id column permanently hata diya hai kyunki mapping table handle karegi
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    school_id INT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    roll_number INT NOT NULL,
    guardian_name VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
    -- 🔥 BUG FIX: Ab ek school me ek roll number ek hi baar aa sakta hai, bina crash hue
    UNIQUE KEY unique_school_roll (school_id, roll_number)
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

-- 🔥 Performance Booster Index for Attendance Search
CREATE INDEX idx_attendance_search ON attendance(school_id, date);

-- 7. FEES TABLE (Financial Ledger - Upgraded!)
CREATE TABLE fees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school_id INT NOT NULL,
    student_id INT NOT NULL,
    total_bill_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00, -- 👈 New Column
    amount_paid DECIMAL(10, 2) NOT NULL,
    payment_date DATE NOT NULL,
    payment_mode ENUM('cash', 'online', 'cheque') NOT NULL,
    status ENUM('paid', 'partially_paid', 'pending') NOT NULL DEFAULT 'pending', -- 👈 New Column
    transaction_id VARCHAR(100) UNIQUE NULL,
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

-- 8. MAPPING TABLE (Student Class Mapping)
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

-- Fast search ke liye mapping index
CREATE INDEX idx_mapping_school_class_year ON student_class_mapping(school_id, class_id, academic_year);