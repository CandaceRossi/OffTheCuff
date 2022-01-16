const router = require("express").Router();
const Posts = require("../models/posts-model");
// const restricted = require("../auth/restricted-middleware");

router.get("/", (req, res) => {
  Posts.getAllPosts()
    .then(allPosts => {
      res.status(200).json(allPosts);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Something went wrong with your request. " });
    });
});

router.get("/:id", (req, res) => {
  const posts_id = req.params.id;
  Posts.findPostsById(posts_id)
    .then(posts => {
      if (posts) {
        res.status(200).json({ posts });
      } else {
        res.status(404).json({ message: "We don't have a post by that id" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Somthing went wrong with your request" });
    });
});

router.post("/", (req, res) => {
  const postsInfo = req.body;
    Posts.addPosts(postsInfo)
      .then(newPosts => {
        res.status(201).json(newPosts);
      })
      .catch(err => {
        res.status(500).json({
          errorMessage:
            "There was a problem adding the new post. Make sure all required fields are filled in."
        });
      });
  
});

function updatePosts(posts_id, changes) {
  console.log("posts-model updatePosts reached posts_id, changes:", posts_id, changes);
  return db("posts")
    .update(changes)
    .where({ posts_id });
}

router.delete("/:id", (req, res) => {
    Posts.removePosts(req.params.id)
      .then(info => res.sendStatus(204))
      .catch(err => res.sendStatus(500));
});


module.exports = router;