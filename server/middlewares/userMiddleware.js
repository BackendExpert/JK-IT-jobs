const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

const accessMiddleware = (roles = []) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized access.' });
        }
        
        if (roles.includes(req.user.role) || req.user.isRepoCreator) {
            return next();
        }
        
        return res.status(403).json({ message: 'Forbidden: You do not have access to this resource.' });
    };
};

module.exports = { authMiddleware, accessMiddleware };