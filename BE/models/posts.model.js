// const db = require("../data/dbConfig");

function getAllPosts() {
  return db("posts").orderBy('posts_id', 'desc');
}

function addPosts(postsInfo) {
  console.log(postsInfo);
  return db("post").insert(postsInfo);
}

function removeIssue(posts_id) {
  return db("posts")
    .where({ posts_id: posts_id })
    .del();
}

module.exports = {
  getAllPosts,
  addPosts,
  removePosts,
};