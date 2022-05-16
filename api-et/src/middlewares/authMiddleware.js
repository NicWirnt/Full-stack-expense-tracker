import { getUser } from "../models/userModel/User.model.js";

export const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (authorization) {
      // Check in Ddatabase
      const user = await getUser(authorization);
      console.log(user);
      return user?._id
        ? next()
        : res.status(403).json({
            status: "error",
            message: "You are not authorized to access",
          });
    }

    res.status(403).json({
      status: "error",
      message: "You are not authorized to access",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
