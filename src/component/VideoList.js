import Video from "./Video";
import PlayButton from "./PlayButton";
import Counter from "./Counter";
import { useMemo } from "react";

import useVideos from "./Hooks/Videos";
// import axios from "axios";
import { useCallback } from "react";
// import useVideoDispatch from "./Hooks/Dispatch";

//   const url = "https://my.api.mockaroo.com/video.json?key=b7932d10";
const VideoList = ({ editVideo }) => {
  // const url = "https://my.api.mockaroo.com/video.json?key=b7932d10";
  const videos = useVideos();
  // const dispatch = useVideoDispatch();
  // starttramsition Hooks
  // const [isPending, startTransition] = useTransition()
  // const [videos,setVideos]=useState=([])

  // useEffect(() => {
  //   async function handleClick() {
  //     try {
  //       const res = await axios.get(url);
  //       dispatch({ type: "LOAD", payload: res.data });
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   handleClick();
  // }, [dispatch]);

  const play = useCallback(() => console.log("playyy"), []);
  const pause = useCallback(() => console.log("Pause"), []);
  const memoButton = useMemo(() => {
    <PlayButton onPlay={play} onPause={pause}>
      play
    </PlayButton>;
  }, [pause, play]);

  // const editVideo = (videoId) => {
  //   // Implement your editVideo logic here
  //   console.log("Edit video with ID:", videoId);

  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          views={video.views}
          channel={video.channel}
          time={video.time}
          title={video.title}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
          {memoButton}
        </Video>
      ))}

      <div style={{ clear: "both" }}>
        <Counter></Counter>
      </div>
    </>
  );
};

export default VideoList;
