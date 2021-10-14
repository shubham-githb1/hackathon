const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const User = require("./models/user");

const PORT = 5000;
const app = express();

mongoose.connect(
  "mongodb+srv://akash:qwerty123@cluster0.v25wr.mongodb.net/Social?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to MongoDB Server");
  }
);

// middleware
app.use(express.json());

app.use(morgan("dev"));
app.get("/user", async (req, res) => {
  const user = await User.findById(req.body.userId);
  if (user) {
    res.json({ sales: user.sales, revenue: user.revenue });
  }
});

app.post("/user", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/sales", async (req, res) => {
  const data = {
    cost: 5,
    desc: "payed",
    user: "andrew",
  };
  try {
    const user = await User.findById(req.body.userId);
    if (user) {
      console.log(user);
      await user.updateOne({ $push: { sales: data } });
      res.send("sales recored entered");
    } else {
      res.status(403).json("user does not exits");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
app.post("/revenue", async (req, res) => {
  const data = {
    cost: 5,
    desc: "payed",
    user: "andrew",
  };
  try {
    const user = await User.findById(req.body.userId);
    if (user) {
      console.log(user);
      await user.updateOne({ $push: { sales: data } });
      res.send("revenue recored entered");
    } else {
      res.status(403).json("user does not exits");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/", (req, res) => {
  res.send("welocome to homepage");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
