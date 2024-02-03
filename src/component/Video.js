import { useContext, memo, useId } from "react";

import "./Video.css";
import useVideoDispatch from "./Hooks/Dispatch";
import ThemeContext from "./Context/ThemeContext";

const Video = memo(function Video({
  title,
  id,

  channel,
  views,
  time,
  verified,
  children,
  editVideo,
}) {
  const dispatch = useVideoDispatch();
  const theme = useContext(ThemeContext);

  // useEffect(() => {
  //   const idx = setInterval(() => {
  //     console.log("videoplaying", id);
  //   }, 5000);
  //   return () => {
  //     clearInterval(idx);
  //   };
  // }, [id]);
  const uid = useId();

  return (
    <>
      <div id={uid} className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="close" onClick={() => editVideo(id)}>
          edit
        </button>
        <div className="pick">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt=" loading" />
        </div>

        <div className="title">{title}</div>

        <div className="channel">
          {channel},{verified && "✔️"}
        </div>

        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
});
export default Video;
