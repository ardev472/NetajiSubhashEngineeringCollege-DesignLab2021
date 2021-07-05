const bcrypt = require("bcryptjs");
const User = require("../model/users");
const jwt = require("jsonwebtoken");

const authKey="loremipsom";


exports.justChecking = (req, res, next) => {
    res.status(200).json({
        message: "Articles fetched succesfuly!"
      });
}


exports.signIn = async(req, res) => {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "User does not exists" }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Password does not match" }] });
      }
      const authToken = jwt.sign(
        {
          _id: user._id,
        },
        authKey,
        {
          expiresIn: "86400000",
        }
      );
      return res.status(200).json({
        idToken: authToken,
        expiresIn: '86400000'
      });
    } catch (err) {
      return res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
}

exports.signUp=  async(req, res) => {
    const {username, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      const newuser = User({
        email,
        password,
        username
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
          if (err) throw err;
          newuser.password = hash;
          newuser.save((err, user) => {
            res.status(200).json(user);
          });
        });
      });
    } catch (err) {
      return res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }

}
