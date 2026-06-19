//  SAFE CODE using Parameterized Query
app.get('/api/admin/dashboard-stats', (req, res) => {
    // Maan lo logged-in admin ka school_id session se aa raha hai
    const schoolId = req.session.schoolId; 

    // 1. Query me placeholder (?) lagaya
    const sqlQuery = `
        SELECT 
            (SELECT COUNT(*) FROM students WHERE school_id = ?) as total_students,
            (SELECT SUM(amount) FROM fees WHERE school_id = ?) as total_fees,
            (SELECT AVG(attendance_status) FROM attendance WHERE school_id = ? AND date = CURDATE()) as today_attendance_percentage
    `;

    // 2. Data ko array me pass kiya. Database har '?' ko sequence wise replace kar dega safely.
    db.query(sqlQuery, [schoolId, schoolId, schoolId], (err, results) => {
        if (err) {
            return res.status(500).send("Database error!");
        }
        // Admin ko secure data bhej diya
        res.json(results[0]);
    });
});