
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../common/prisma');
const { JWT_SECRET_KEY } = process.env;

const register = async (req, res) => {
  try {
    const { login, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await prisma.admin.create({
      data: { login, password: hashedPassword }
    });
    res.status(201).json({ id: admin.id, login: admin.login });
  } catch (err) {
    res.status(400).json({ message: 'Registration failed' });
  }
};

const login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const admin = await prisma.admin.findUnique({ where: { login } });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: admin.id, login: admin.login }, JWT_SECRET_KEY);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: 'Login failed' });
  }
};

module.exports = { register, login };
