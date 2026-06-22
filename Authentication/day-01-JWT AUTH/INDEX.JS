const jwt =require('jsonwebtoken')

const userPayload={
    userId: "erp_user_99",
    email: "amit@company.com",
    role: "manager"
}

const JWT_SECRET="MeraSuperSecretBaapKey123!";

const token=jwt.sign(userPayload,JWT_SECRET,{expiresIn:'1h'});
console.log("Generated Token JWT:", token);

// ERP ka authentication middleware
const verifyTokenMiddleware = (req, res, next) => {
    // Frontend token ko Headers me 'Authorization: Bearer <token>' bhejta hai
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Split karke actual token nikala

    if (!token) {
        return res.status(401).json({ message: "Access Denied: Token nahi mila, bhai!" });
    }

    try {
        // Verification step
        const verifiedData = jwt.verify(token, JWT_SECRET);
        
        // Agar sahi hai toh verified data (userId, role) ko req object me daal do
        req.user = verifiedData; 
        
        next(); // Agle controller par bhej do
    } catch (err) {
        // Agar token expire ho gaya ya tampered hai
        return res.status(403).json({ message: "Invalid ya Expired Token hai re baba!" });
    }
};

