import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onselectVideoItem }) => {
  const renderedList = videos.map( video => {
   return <VideoItem video={video} onselectVideoItem={onselectVideoItem} key={video.id.videoId}/>;
  })

  return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;