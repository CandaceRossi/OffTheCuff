const db = require('../data/dbConfig');


module.exports = {
  getAllComments,
  findCommentsById,
  getPostsComments,
  commentOnPosts,
  removeComments
};


function getAllComments() {
  return db('comments')
}

function findCommentsById(comments_id) {
  return db("comments")
    .where("comments_id", comments_id)
    .first();
}


function getPostsComments(posts_id) {
  console.log("Made it to comments-model posts_id", posts_id)
  return db('comments as c')
    .join('posts as p', 'p.posts_id', 'c.posts_id')
    // .join('users as u', 'u.user_id', 'c.user_id')
    .where('p.posts_id', '=', posts_id)
    .select('c.*', 'p.title', 'p.description')
    .orderBy('c.create_at', 'desc')
}

async function commentOnPosts(newComment) {
  console.log("made it to commentOnIssue in model")
  return db('comments').insert(newComment)

}

function removeComments(comments_id) {
  return db("comments")
    .where({ comments_id: comments_id })
    .del();
}