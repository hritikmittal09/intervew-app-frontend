import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

const VideoInterview = () => {
  const webcamRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(100); // seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-teal-700 flex flex-col items-center justify-center p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Video Interview</h2>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          className="rounded-md w-64 h-48"
        />
      </div>

      <p className="mt-6 text-lg">
        Time remaining:{" "}
        <span className="font-semibold text-yellow-300">{timeLeft}s</span>
      </p>

      {timeLeft === 0 && (
        <p className="mt-4 text-red-200">Session completed. Please continue.</p>
      )}
    </div>
  );
};

export default VideoInterview;
