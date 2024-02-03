import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import "./AddVideo.css";

import useVideoDispatch from "./Hooks/Dispatch";
// import { useRef } from "react";
import { forwardRef } from "react";

const AddVideo = forwardRef(function AddVideo({ edittableVideo }, ref) {
  const initialState = {
    channel: "react",
    time: "1year ago",
    verified: true,
    title: "",
    views: "",
  };
  const dispatch = useVideoDispatch();
  const [video, setVideo] = useState(initialState);

  // const inputRef = useRef(null);
  const iRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      jumpTo() {
        iRef.current.focus();
      },
    };
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (edittableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value);
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (edittableVideo) {
      setVideo(edittableVideo);
    }

    // inputRef.current.focus();
  }, [edittableVideo]);

  return (
    <>
      <form>
        <input
          ref={iRef}
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <div>
          <button onClick={handleSubmit}>
            {" "}
            {edittableVideo ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
});

export default AddVideo;
