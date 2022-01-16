const router = require("express").Router();
// const Posts = require("../models/posts-model");
const Comments = require('../models/comments-model')
// const restricted = require("../auth/restricted-middleware");

router.get('/', (req, res) => {
  Comments.getAllComments()
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(err => {
      res.status(500).json({ message: "Sorry something went wrong trying to retrieve all the commenets" })
    })
})

router.get('/comments/:id', (req, res) => {
  const comments_id = req.params.id;
  Comments.findCommentsById(comments_id)
    .then(comments => {
      if (comments) {
        res.status(200).json(comments);
      } else {
        res.status(404).json({ message: "There's no comments yet for this post" })
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Sorry, internal server error." });
    });
})

router.get('/posts/:id', (req, res) => {
  const posts_id = req.params.id;
  Comments.getPostsComments(posts_id)
    .then(comments => {
      if (comments) {
        res.status(200).json(comments);
      } else {
        res.status(404).json({ message: "There's no comments yet for this issue" })
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Sorry, internal server error." });
    });
})

router.post('/', (req, res) => {
  const posts_id = req.body.posts_id;
  const newComment = req.body;
  Comments.commentOnPosts(newComment)
    .then(info => {
      console.log("comments-router /post info", info);
      if (info) {
        res.status(201).json({ message: "You've made a new comment to this post", info: info })
      } else {
        res.status(404).json({ message: "Sorry, we couldn't find a post with that id" })
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Sorry, internal server error." });
    })
})

router.delete("/:id", (req, res) => {
    Comments.removeComments(req.params.id)
      .then(info => res.sendStatus(204))
      .catch(err => res.sendStatus(500));
});

module.exports = router;