import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const CommercialGameSection = ({ videoData }) => {
  const [ videoList, setVideoList ] = useState(videoData);

  return (
    <section className="commercial-game-section">
      <VideoPlayer source={videoList[0].file} />
    </section>
  )
}

export default CommercialGameSection
