var post = [
  { id: 1, title: "New Post" },
  { id: 2, title: "Old Post" },
];

var comment = { postId: 1, content: "Great post" };

// function to find the post given the comment

function postForComment(comment, post) {
  return post.find(function (p) {
    return p.id == comment.postId;
  });
}

console.log(postForComment(comment, post));
