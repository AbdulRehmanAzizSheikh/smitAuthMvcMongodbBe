import User from "../models/User.js";

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("Incoming Data:", username, email, password);

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.create({
      username: username,
      email: email,
      password: password,
    });

    res.status(200).json({ message: "User created successfully", user });
  } catch (error) {
    console.log("Database Save Error:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { signup };
