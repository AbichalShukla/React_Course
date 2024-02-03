import React, { useContext, memo } from "react";
import "./PlayButton.css";
import { useState } from "react";
import ThemeContext from "./Context/ThemeContext";

const PlayButton = memo(function PlayButton({ children, onPlay, onPause }) {
  const theme = useContext(ThemeContext);
  const [playing, setPlaying] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  };
  return (
    <>
      <button className={theme} onClick={handleClick}>
        {children}
        {playing ? "⏯️" : "▶️"}
      </button>
    </>
  );
});

export default PlayButton;
