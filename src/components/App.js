import video from '../data/video.js';
import VideoTop from './VideoTop.js';
import CommentList from './CommentList.js';
import { useState } from 'react';

function App() {
  console.log("Here's your data:", video);

  const [commentsDisplay, setCommentsDisplay] = useState(true);

  const toggleDisplay = () => {
    setCommentsDisplay(!commentsDisplay);
  };

  return (
    <div className='App'>
      <iframe
        width='919'
        height='525'
        src='https://www.youtube.com/embed/dQw4w9WgXcQ'
        frameborder='0'
        allowfullscreen
        title='Thinking in React'
      />
      <VideoTop toggleDisplay={toggleDisplay} />
      {commentsDisplay ? <CommentList comments={video.comments} /> : null}
    </div>
  );
}

export default App;
