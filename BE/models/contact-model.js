// const db = require('../data/dbConfig');


module.exports = {
  getAllComments,
  getPostsComments,
  addComment
};


function getAllComments() {
  return db('comments')

}

function getPostsComments(posts_id) {
  console.log("Made it to comments-model posts_id", posts_id)
  return db('comments as c')
    .join('posts as p', 'p.posts_id', 'c.posts_id')
    .join('users as u', 'u.user_id', 'c.user_id')
    .where('p.posts_id', '=', posts_id)
    .select('c.*', 'p.title', 'p.description')
    .orderBy('c.create_at', 'desc')
}

async function addComment(newComment) {
  console.log("made it to commentOnPosts in model")
  return db('comments').insert(newComment);
}

function removeComment(comments_id) {
  return db("comments")
    .where({ comments_id: comments_id })
    .del();
}