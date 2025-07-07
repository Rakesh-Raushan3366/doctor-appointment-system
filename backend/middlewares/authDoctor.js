import jwt from 'jsonwebtoken';


// Doctor authenication middleware

const authDoctor = async (req, res, next) => {
    try {
        // Get access dtoken from request headers
        const { dtoken } = req.headers;
        // Check if dtoken is missing
        if (!dtoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }
        // Verify and decode the dtoken
        const dtoken_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
        req.body = req.body || {};
        req.body.docId = dtoken_decode.id;
        // Allow request to proceed
        next();

    } catch (error) {
        console.error('Admin Auth Error:', error.message);
        res.json({ success: false, message: error.message });
    }
};

export default authDoctor;