import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./VideoGallery.css";

// Dynamically import all videos in the specified directory
const videos = import.meta.glob("/src/assets/videos/*.{mp4,webm,ogg}", {
  eager: true,
});

const VideoGallery = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videoList = Object.keys(videos).map((key) => ({
    src: videos[key].default,
    alt: key,
  }));

  const handlePlayClick = (src) => {
    setPlayingVideo(src);
  };

  const handleClose = () => {
    setPlayingVideo(null);
  };

  return (
    <div>
      <Masonry
        breakpointCols={{
          default: 2,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="video-gallery-masonry"
        columnClassName="video-gallery-masonry-column"
      >
        {videoList.map((video, index) => (
          <div key={index} className="video-gallery-item">
            <button
              type="button"
              className="video-gallery-button"
              onClick={() => handlePlayClick(video.src)}
            >
              <div className="video-thumbnail">
                {/* Add a placeholder image or text */}
                <p>Play Video</p>
              </div>
            </button>
          </div>
        ))}
      </Masonry>

      {playingVideo && (
        <div className="video-overlay">
          <button onClick={handleClose} className="close-overlay">
            Close
          </button>
          <video controls autoPlay className="video-fullscreen">
            <source src={playingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
