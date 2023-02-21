import React from "react";
import { useLoaderData } from "react-router-dom";
import VideoChatSection from "../components/VideoChatSection";
import CommercialGameSection from "../components/CommercialGameSection";

const Main = () => {
  const { playerData, videoData } = useLoaderData();
  return (
    <main className="main-area">
      <VideoChatSection playerData={playerData} />
      <CommercialGameSection videoData={videoData} />
    </main>
  )
}

export default Main;
