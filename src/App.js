import "./App.css";

import videoDb from "./component/Data/Data";

import AddVideo from "./component/AddVideo";
import { useReducer, useState } from "react";
import VideoList from "./component/VideoList";
import ThemeContext from "./component/Context/ThemeContext";
import VideoContext from "./component/Context/VideoContext";
import VideoDispatchContext from "./component/Context/VideoDispatchContext";
import { useRef } from "react";
import { useCallback } from "react";

function App() {
  const [edittableVideo, setEdittableVideo] = useState();
  const [mode, setMode] = useState("darkMode");
  const ref = useRef(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);

        setEdittableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDb);
  const editVideo = useCallback(
    function editVideo(id) {
      setEdittableVideo(videos.find((video) => video.id === id));
    },
    [videos]
  );

  let inputref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  return (
    <ThemeContext.Provider value={mode}>
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <button onClick={handleClick}>Click me!</button>
          <button
            onClick={() => {
              inputref.current.jumpTo();
            }}
          >
            focus
          </button>

          <button
            onClick={() =>
              setMode(mode === "darkMode" ? "lightMode" : "darkMode")
            }
          >
            {" "}
            Mode
          </button>
          <div className={`app ${mode}`}>
            <AddVideo edittableVideo={edittableVideo} ref={inputref}></AddVideo>
            <VideoList editVideo={editVideo}></VideoList>
          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
