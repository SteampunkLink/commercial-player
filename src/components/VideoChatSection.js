import React from 'react';
import VideoChatWindow from './VideoChatWindow';

const VideoChatSection = ({ playerData }) => {
  return (
    <section className="video-chat-section">
      {playerData.map((player, idx) => <VideoChatWindow key={idx} player={player} />)}
    </section>
  )
};

export default VideoChatSection;
