const res = require("express/lib/response");
const User = require("../models/User.model");

module.exports.userControllers = {
  addUser: (req, res) => {
    User.create({
      name: req.body.name,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  addSavedTwit: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      $push: { savedTwits: req.body.savedTwits },
    })
      .populate("twit")
      .then(() => {
        res.json("Запись сохранена");
      })
      .catch((e) => res.json(e));
  },

  getUsers: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getUserById: (req, res) => {
    User.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => res.json(e));
  },
  deleteUser: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((e) => res.json(e));
  },
};
