import jwt from 'jsonwebtoken';

// User authenication middleware

const authUser = async (req, res, next) => {
    try {
        // Get access token from request headers
        const { token } = req.headers;
        // Check if token is missing
        if (!token) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }
        // Verify and decode the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body = req.body || {};
        req.body.userId = token_decode.id;
        // Allow request to proceed
        next();

    } catch (error) {
        console.error('Admin Auth Error:', error.message);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;