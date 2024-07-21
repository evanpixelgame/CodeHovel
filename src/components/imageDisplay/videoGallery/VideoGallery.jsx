import React, { useState, useRef, useEffect } from "react";
import Masonry from "react-masonry-css";
import "./VideoGallery.css";

const videos = import.meta.glob("/src/assets/videos/*.{mp4,webm,ogg}", {
  eager: true,
});

const VideoGallery = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState({});

  const videoRef = useRef(null);

  useEffect(() => {
    const generateThumbnails = async () => {
      const thumbnails = {};
      for (const key of Object.keys(videos)) {
        const videoUrl = videos[key].default;

        // Create a video element and canvas
        const video = document.createElement("video");
        video.src = videoUrl;
        video.crossOrigin = "anonymous";

        // Create a canvas and context
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Wait for the video to load metadata
        await new Promise((resolve) => {
          video.addEventListener("loadedmetadata", () => {
            // Set canvas size to video size
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Seek to the start of the video
            video.currentTime = 0;

            // Wait for the frame to be drawn
            video.addEventListener("seeked", () => {
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
              const dataUrl = canvas.toDataURL("image/jpeg");
              thumbnails[videoUrl] = dataUrl;
              resolve();
            });
          });
        });
      }
      setThumbnails(thumbnails);
    };

    generateThumbnails();
  }, []);

  const handlePlayClick = (src) => {
    setPlayingVideo(src);
  };

  const handleClose = () => {
    setPlayingVideo(null);
  };

  const videoList = Object.keys(videos).map((key) => ({
    src: videos[key].default,
    alt: key,
    thumbnail: thumbnails[videos[key].default],
  }));

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
                {video.thumbnail ? (
                  <img src={video.thumbnail} alt={video.alt} />
                ) : (
                  <p>Loading...</p>
                )}
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
