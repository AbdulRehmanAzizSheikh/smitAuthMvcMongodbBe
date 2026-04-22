import User from "../models/User.js";

const users = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json({ users });
  } catch (error) {
    console.log("Database Save Error:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { users };

const singleUser = async (req, res) => {
  try {
    const query = {};
    const username = req.params.username;
    if (username) {
      query.username = username;
    }
    const user = await User.findOne(query);
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    console.log("Database Save Error:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { singleUser };
