const { User } = require("./../model/User");

const userlists = async (req, res) => {
  try {
    const users = await User.find({});

    const userInfo = users.map((user) => {
      return {
        id: user._id,
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        role: user.role,
      };
    });

    res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { userlists };
