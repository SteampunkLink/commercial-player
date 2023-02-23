import React from 'react';

const VideoSelector = ({ buttons, handleSelect }) => {
  return (
    <div className="selector-btn-container">
      {buttons.map((btn, idx) => {
        return <button 
          key={idx} 
          className="selector-btn" 
          onClick={() => handleSelect(btn, idx)}
        >{btn.display}</button>
      })}
    </div>
  )
};

export default VideoSelector;
