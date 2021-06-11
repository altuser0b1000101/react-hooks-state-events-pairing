import React from 'react';

function Comment(props) {
  return (
    <div>
      <h3>{props.user}</h3>
      <p>{props.comment}</p>
    </div>
  );
}
export default Comment;
