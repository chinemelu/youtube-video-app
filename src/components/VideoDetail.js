import React from 'react';

const VideoDetail = ({ video }) => { 
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
 
  return (
    <div>
      <div class="ui segment">
        <div class="ui embed">
          <iframe title={video.snippet.title} src={videoSrc}></iframe>
        </div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
