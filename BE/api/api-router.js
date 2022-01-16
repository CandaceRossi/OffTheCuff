const router = require("express").Router();
const commentsRouter = require("../routes/comments-router");
const contactRouter = require("../routes/contact-router");
const postsRouter = require("../routes/posts-router");


router.use("/comments", commentsRouter);
router.use("/contact", contactRouter);
router.use("/posts", postsRouter);



router.get("/", (req, res) => {
  res.json({
    api: "THIS IS YOUR BASE API ROUTER."
  });
});

module.exports = router;