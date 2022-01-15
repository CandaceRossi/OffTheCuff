// const db = require('../data/dbConfig');


module.exports = {
  getAllComments,
  getPostsComments,
  commentOnPosts
};


function getAllComments() {
  return db('comments')

}

function getPostsComments(posts_id) {
  console.log("Made it to comments-model posts_id", posts_id)
  return db('comments as c')
    .join('posts as p', 'p.posts_id', 'c.posts_id')
    // .join('users as u', 'u.user_id', 'c.user_id')
    .where('p.posts_id', '=', posts_id)
    .select('c.*', 'p.title', 'p.description')
    // .select('c.*', 'p.title', 'p.description', 'u.first_name', 'u.last_name', 'u.email', 'u.board', 'u.primary_admin', 'u.sec_admin')
    .orderBy('c.create_at', 'desc')
}

async function commentOnIssue(newComment) {
  console.log("made it to commentOnIssue in model")
  return db('comments').insert(newComment)

}