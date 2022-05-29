const Twit = require("../models/Twit.model");

module.exports.twitControllers = {
  addTwit: (req, res) => {
    Twit.create({ head: req.body.head, text: req.body.text })
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  },
  getTwits: (req, res) => {
    Twit.find()
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  },
  deleteTwit: (req, res) => {
    Twit.findByIdAndRemove(req.params.id)
      .then(() => res.json("Пост удалён"))
      .catch((e) => res.json(e));
  },
  updateTwit: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      head: req.body.head,
      text: req.body.text,
    })
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  },
  addLike: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      $push: { likes: req.body.likes },
    }).then((data) => res.json(data));
  }
};