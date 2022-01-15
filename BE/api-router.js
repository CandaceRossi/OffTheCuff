const router = require("express").Router();
// const authRouter = require("../auth/auth-router");
// const usersRouter = require("../users/users-router");
const postsRouter = require("../routes/posts-router");
const contactRouter = require("../routes/contact-router");
const commentsRouter = require("../routes/comments-router");

// router.use("/auth", authRouter);
// router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/contact", contactRouter);
router.use("/comments", commentsRouter);



router.get("/", (req, res) => {
  res.json({
    api: "THIS IS YOUR BASE API ROUTER."
  });
});

module.exports = router;