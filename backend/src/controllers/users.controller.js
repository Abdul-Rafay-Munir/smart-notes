import { User } from "../models/users.models.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({ message: "Username, Email or password is empty" });
    }
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.username,
        email: user.email,
        password:user.password
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { registerUser };
