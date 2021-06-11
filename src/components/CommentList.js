import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  console.log(comments);
  return (
    <div>
      <h2>{comments.length} Comments</h2>
      <Comment comment={comments[0].comment} user={comments[0].user} />
      <Comment comment={comments[1].comment} user={comments[1].user} />

      {/* <h3>user</h3>
      <p>comment</p> */}
    </div>
  );
}

export default CommentList;
