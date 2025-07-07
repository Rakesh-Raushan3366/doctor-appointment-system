import jwt from 'jsonwebtoken';

// Middleware to authenticate admin using JWT token

const authAdmin = async (req, res, next) => {
    try {
        // Get access token from request headers
        const { atoken } = req.headers;

        // Check if token is missing
        if (!atoken) {
            return res.json({ success: false, message: 'Access denied. Please login as admin.' });
        }
        // Verify and decode the token
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

        // Check if decoded token matches admin credentials
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: 'Invalid token. Admin authentication failed.' });
        }

        // Allow request to proceed
        next();

    } catch (error) {
        console.error('Admin Auth Error:', error.message);
        res.json({ success: false, message: 'Authentication error. Please login again.' });
    }
};

export default authAdmin;