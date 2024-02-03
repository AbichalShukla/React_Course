import { useContext, useDebugValue } from "react";
import VideosContext from "../Context/VideoContext";

function useVideos() {
  useDebugValue(useContext(VideosContext).length);
  return useContext(VideosContext);
}

export default useVideos;
