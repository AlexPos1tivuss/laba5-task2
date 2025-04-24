
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;
const prisma = require('../common/prisma');

const auth = async (req, res, next) => {
  if (req.path === '/login' || req.path === '/') {
    return next();
  }

  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    const admin = await prisma.admin.findUnique({ where: { id: decoded.id } });
    if (!admin) {
      return res.status(403).json({ message: 'Forbidden - User not found' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

module.exports = auth;
