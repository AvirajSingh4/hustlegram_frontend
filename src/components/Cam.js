import React, { useState, useRef } from 'react';

const Cam = () => {
  const [isCameraAccessible, setIsCameraAccessible] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraAccessible(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const captureImage = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div>
      {isCameraAccessible ? (
        <>
          <video ref={videoRef} autoPlay playsInline controls />
          <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
          <button onClick={captureImage}>Capture</button>
        </>
      ) : (
        <button onClick={startCamera}>Access Camera</button>
      )}
    </div>
  );
};

export default Cam;
