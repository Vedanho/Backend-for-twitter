const Comment = require("../models/Comment.model")

module.exports.commentControllers = {
  createComment: (req, res) => {
    Comment.create({
      text: req.body.text,
      user: req.body.user,
      twit: req.body.twit,
    })
      .then(() => res.json("Коммент опубликован"))
      .catch((e) => res.json(e));
  },
  getComment: (req, res) => {
    Comment.find().populate('twit').populate('user')
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  },
  deleteComment: (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
      .then(() => res.json("Пост удалён"))
      .catch((e) => res.json(e));
  },
  updateComment: (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, {
      text: req.body.text
    })
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  }
};
