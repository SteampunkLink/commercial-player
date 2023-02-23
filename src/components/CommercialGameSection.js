import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoSelector from './VideoSelector';

const CommercialGameSection = ({ videoData }) => {
  const [ videoList, setVideoList ] = useState(videoData);
  const [ videoButtons, setVideoButtons ] = useState(videoData.slice(0, 6));
  const [ currentVideo, setCurrentVideo ] = useState(null);

  const selectVideo = (video, idx) => {
    let updatedVidList = videoList;
    let videoSeven = updatedVidList.splice(6, 1); // gets the 7th video from the list
    updatedVidList.splice(idx, 1, videoSeven[0]); // replace selected video with 7th
    updatedVidList.push(video); // add selected video to the end
    setVideoButtons(updatedVidList.slice(0, 6));
    setVideoList(updatedVidList);
    setCurrentVideo(video.file);
  }

  return (
    <section className="commercial-game-section">
      {/* <VideoPlayer source={videoList[0].file} /> */}
      <VideoPlayer source={currentVideo} />
      <VideoSelector buttons={videoButtons} handleSelect={selectVideo} />
    </section>
  )
}

export default CommercialGameSection
