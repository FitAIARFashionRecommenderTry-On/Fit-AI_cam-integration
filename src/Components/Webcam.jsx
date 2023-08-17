import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './webcam.css'

function WebcamComponent() {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [isStreaming, setIsStreaming] = useState(true);

  const handleCapture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedPhoto(imageSrc);
      setIsStreaming(false); // Stop streaming
    }
  };

  const handleRetake = () => {
    setCapturedPhoto(null);
    setIsStreaming(true); // Resume streaming
  };

  const handleDownload = () => {
    if (capturedPhoto) {
      const link = document.createElement('a');
      link.href = capturedPhoto;
      link.download = 'captured_photo.jpg';
      link.click();
    }
  };

  return (
    <div className="webcam-container">
      <div className="webcam-video">
        {isStreaming ? (
          <Webcam
            audio={false}
            mirrored={true}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
        ) : (
          <img src={capturedPhoto} alt="Captured" />
        )}
      </div>
      <div className="capture-buttons"><br></br>
        {isStreaming && (
          <button onClick={handleCapture} className='btn btn-primary'>Capture Photo</button>
        )}
        {!isStreaming && (
          <>
            <button onClick={handleRetake}>Retake</button>
            <button onClick={handleDownload} disabled={!capturedPhoto} className='btn btn-primary'>
              Download Photo
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default WebcamComponent;

