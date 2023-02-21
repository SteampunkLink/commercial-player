import players from "../data/playerData";
import allVideos from "../data/videoData";

const shuffle = (arr) => {
  let currentIndex = arr.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

export const mainLoader = () => {
  const playerData = players;
  const videoData = shuffle(allVideos);
  return { playerData, videoData }
};