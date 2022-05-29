const { Router } = require("express");

const { commentControllers } = require("../contollers/comment.controllers");

const router = Router();

router.post("/comment", commentControllers.createComment);
router.get("/comment", commentControllers.getComment);
router.delete("/comment/:id", commentControllers.deleteComment);
router.patch("/comment/:id", commentControllers.updateComment);

module.exports = router;
