const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User } = require("../models");
dotenv.config();

const { validateAddUserInput } = require("../utils/users");

const SALT_ROUNDS = 5;

// router.post("/add-user/", async (req, res) => {
//   if (validateAddUserInput(req.body)) {
//     const user = await User.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       fullName: `${req.body.firstName} ${req.body.lastName}`,
//     });
//     res.status(201).json(user);
//   } else {
//     res.status(400).json({ error: "Invalid input" });
//   }
// });

router.post("/sign-up/", async (req, res) => {
  try {
    if (req.body.password === req.body.passwordConfirmation) {
      const existingUser = await User.findOne({
        where: { username: req.body.username },
      });
      if (existingUser) {
        res.status(400).json({ error: "Username en uso" });
      } else {
        const hashedPassword = await bcrypt.hash(
          req.body.password,
          SALT_ROUNDS
        );
        const user = await User.create({
          username: req.body.username,
          password: hashedPassword,
        });
        res.status(201).json(user);
      }
    } else {
      res.status(400).json({ error: "Contraseñas no coinciden" });
    }
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

router.post("/login/", async (req, res) => {
  const user = await User.findOne({
    where: { username: req.body.username },
  });
  if (!user) {
    res.status(400).json({ error: "El usuario y la contraseña no coinciden" });
  } else {
    const result = bcrypt.compareSync(req.body.password, user.password);
    if (result) {
      const token = jwt.sign(
        {
          username: user.username,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "1800s",
        }
      );
      res.status(200).json({ token: token });
    } else {
      res
        .status(400)
        .json({ error: "El usuario y la contraseña no coinciden" });
    }
  }
});

module.exports = router;
