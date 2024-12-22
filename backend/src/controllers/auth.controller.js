import User from "../models/user.model.js";
import bcrypt from "bcrypt.js";

export const signup = async (req, res) => {
  const { fullName, email, passseord } = req.body;
  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at 6 characters" });
    }
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      passowrd: hashedPassword,
    });

    if (newUser) {
      //genrate jwt token here
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("login route");
};

export const logout = (req, res) => {
  res.send("logout route");
};
