// find all the comments which are part of a particular post

var post = { id: 4, title: "New Post" };

var comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was ok" },
  { postId: 4, content: "neat" },
];

// this function return the resulting array which is filtered based on the boolean returned in the inner iterator function
function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

var finalResult = commentsForPost(post, comments);
console.log(finalResult);
