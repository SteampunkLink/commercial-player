import React from "react";
import { useLoaderData } from "react-router-dom";
import VideoChatSection from "../components/VideoChatSection";
import CommercialGameSection from "../components/CommercialGameSection";

const Main = () => {
  const { playerData } = useLoaderData();
  return (
    <main className="main-area">
      <VideoChatSection playerData={playerData} />
      <CommercialGameSection />
    </main>
  )
}

export default Main;
