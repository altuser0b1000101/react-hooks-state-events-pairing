import React from 'react';
import video from '../data/video';
import { useState } from 'react';

function VideoTop({ toggleDisplay }) {
  const [itemUpvotes, setItemUpvotes] = useState(video.upvotes);
  const [itemDownvotes, setItemDownvotes] = useState(video.downvotes);

  const upvoteIncrimenter = () => {
    setItemUpvotes(itemUpvotes + 1);
  };

  const downvoteIncrimenter = () => {
    setItemDownvotes(itemDownvotes + 1);
  };

  return (
    <div>
      <h1>{video.title}</h1>
      <p>
        <span>{video.views} Views</span> | |
        <span>Created At: {video.createdAt}</span>
      </p>
      <p>
        <button onclick={upvoteIncrimenter}>{itemUpvotes} 🖕</button>
        <button onclick={downvoteIncrimenter}>{itemDownvotes} 👇🏼</button>
      </p>
      <button onclick={toggleDisplay}>Hide Comments</button>
    </div>
  );
}

export default VideoTop;
