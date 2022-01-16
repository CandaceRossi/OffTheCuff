const db = require("../data/dbConfig");

function getAllPosts() {
  return db("posts").orderBy('posts_id', 'desc');
}

function findPostsById(posts_id) {
  return db("posts")
    .where("posts_id", posts_id)
    .first();
}

function addPosts(postsInfo) {
  console.log(postsInfo);
  return db("post").insert(postsInfo);
}

function updatePosts(posts_id, changes) {
  console.log("posts-model updateIssues reached issues_id, changes:", issues_id, changes);
  return db("posts")
    .update(changes)
    .where({ posts_id });
}

function removePosts(posts_id) {
  return db("posts")
    .where({ posts_id: posts_id })
    .del();
}

module.exports = {
  getAllPosts,
  findPostsById,
  addPosts,
  updatePosts,
  removePosts,
};