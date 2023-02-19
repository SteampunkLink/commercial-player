import React from 'react'

const VideoChatWindow = ({ player }) => {
  return (
    <div className="video-chat-window">
      <header className="video-chat-bar"><p>{player.name}</p></header>
      <div className="video-area">
      </div>
      <footer className="video-footer">
        {`${player.social}: ${player.handle} - (${player.pronouns})`}
      </footer>
    </div>
  )
}

export default VideoChatWindow
