const express = require('express');
const abiturientRouter = require('./abiturient/abiturient.router');
const examRouter = require('./exam/exam.router');
const teacherRouter = require('./teacher/teacher.router');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next();
});

app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});