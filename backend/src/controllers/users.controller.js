import { User } from "../models/users.models.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are important" });
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
        password: user.password,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are important" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatched = await user.comparePassword(password);

    if (!isMatched) {
      return res.status(400).json({ message: "Invalid crediantials" });
    }

    res.status(200).json({
      message: "User loggedin successfully",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User logout successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { registerUser, loginUser, logoutUser };
