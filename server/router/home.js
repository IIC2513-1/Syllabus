const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Hola mundo desde express');
});

router.get('/about', (req, res) => {
  res.status(200).json({
    courseName: 'Tecnologías y aplicaciones web',
    courseCode: "IIC2513",
    enrollmentNumber: 120,
  });
});

module.exports = router;