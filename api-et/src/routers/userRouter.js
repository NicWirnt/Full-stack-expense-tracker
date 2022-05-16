import express from "express";
import { findUser, insertUser } from "../models/userModel/User.model.js";
const router = express.Router();

//get user
router.get("/", (req, res) => {
  res.send("get user");
});

//register a user
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "User registered succesfully. You may login now",
        })
      : res.json({
          status: "Error",
          message: "User registered Failed, please try again later",
        });
  } catch (error) {
    let message = error.message;
    if (error.message.includes("duplicate key error collection")) {
      message = "User already exists using this email!";
    }
    res.json({
      status: "Error",
      message,
    });
  }
});

//login user
router.post("/login", async (req, res) => {
  try {
    const user = await findUser(req.body);

    user?._id
      ? res.json({
          status: "Success",
          user,
        })
      : res.json({
          status: "Error",
          message: "Invalid Login Credentials",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Error",
      message: error.message,
    });
  }
});

export default router;
