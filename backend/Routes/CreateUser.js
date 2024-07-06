const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const jwt= require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const jwtSecret="MynameisAkulaReddySaiVamsiandIamastudent$#";
const router = express.Router();

router.post(
  "/createuser",
  [
    body(
      "email",
      "Incorrect email format (Correct format: example@example.com)"
    ).isEmail(),
    body(
      "password",
      "Incorrect Password (Minimum length of password: 8)"
    ).isLength({ min: 8 }),
    body("name", "Incorrect name (Minimum length of name: 5)").isLength({
      min: 5,
    }),
    body("location").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        location: req.body.location,
      });

      console.log("User created: ", newUser);

      const responseData = {
        ...newUser._doc,
        date: new Date(newUser.date).toISOString(),
      };

      res.json({
        success: true,
        data: responseData,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({
        success: false,
        error: "Server error",
      });
    }
  }
);

router.post(
  "/loginuser",
  [
    body(
      "email",
      "Incorrect email format (Correct format: example@example.com)"
    ).isEmail(),
    body(
      "password",
      "Incorrect Password (Minimum length of password: 8)"
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;
      const userData = await User.findOne({ email });

      if (!userData) {
        return res.status(400).json({ errors: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(req.body.password, userData.password);

      if (!isMatch) {
        return res.status(400).json({ errors: "Invalid credentials" });
      }
      const data = {
        user:{
            id:userData.id
        }
      }
      const authToken=jwt.sign(data,jwtSecret)
      return res.json({ success: true , authToken:authToken});
    } catch (error) {
      console.error("Error in login:", error);
      res.status(500).json({
        success: false,
        error: "Server error",
      });
    }
  }
);

module.exports = router;
