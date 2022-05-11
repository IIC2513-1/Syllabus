const express = require("express");
const router = express.Router();

router.get('/profile', (req, res) => {
  res.status(200).json({
      name: 'Isaac',
      email: 'ifcarrera@uc.cl',
  });
});

module.exports = router;