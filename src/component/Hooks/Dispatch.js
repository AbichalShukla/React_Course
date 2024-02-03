import { useContext } from "react";
import VideoDispatchContext from "../Context/VideoDispatchContext";

function useVideoDispatch() {
  return useContext(VideoDispatchContext);
}

export default useVideoDispatch;
