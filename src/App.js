// import './App.css';
// import React,{useState} from 'react';
// // import { Page } from './Components/Page';
// import { Header } from './Components/Header';
// import { Shop } from './Components/Shop';
// import { Body } from './Components/Body';
// // import Webcam from "react-webcam";
// // import React, { useState } from 'react'
// import Webcam from 'react-webcam'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// const WebcamComponent = () => <Webcam />
// const videoConstraints = {
//   width: 400,
//   height: 400,
//   facingMode: 'user',
// }
                                  

// function App() {

//   const [picture, setPicture] = useState('')
//   const webcamRef = React.useRef(null)
//   const capture = React.useCallback(() => {
//     const pictureSrc = webcamRef.current.getScreenshot()
//     setPicture(pictureSrc)
//   })

//   const [state, setState] = useState(false);
//   const [buttontxt, setButtontxt] = useState('Try New FITAI');
      
//   const handleChange = () => {
//     setState(!state);
//     setButtontxt(state ?' Try New FITAI':'Scan with Camera');
//   }

//   return (
//   <>
//     <Header /> <br></br>
//     <div className='d-flex justify-content-center align-items-center'>
//       <button className="btn btn-primary center" onClick={handleChange}>
//       <div>
//         <div>
//            {picture == '' ? (
//             <Webcam
//             audio={false}
//             height={400}
//             ref={webcamRef}
//             width={400}
//             screenshotFormat="image/jpeg"
//             videoConstraints={videoConstraints}
//              />
//            ) : (
//             <img src={picture} />
//            )}
//         </div>
//       <div>
//           {picture != '' ? (
//             <button onClick={(e) => { e.preventDefault() 
//                setPicture()
//              }}
//              className="btn btn-primary"
//             >
//             Retake
//            </button>
//         ) : (
//           <button
//             onClick={(e) => {
//               e.preventDefault()
//               capture()
//             }}
//             className="btn btn-danger"
//           >
//            {buttontxt}
//           </button>
//         )}
//       </div>
//     </div>
  
//       </button>
//     </div>
//     {/* <Page /> */}
//     {/* {state ? (<Shop />):(<Body />)} */}
//     {state ? (<Shop />) : (<Webcam />)}
//   </>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import {Body} from './Components/Body';
import {Shop} from './Components/Shop';
import WebcamComponent from './Components/Webcam';
import {Header} from './Components/Header';

function App() {
  const [buttonText, setButtonText] = useState('Try New Fit AI');
  const [isClicked, setIsClicked] = useState(false);
  const [isCamClicked, setIsCamClicked] = useState(false);

  const handleButtonClick = () => {
    if (!isClicked) {
      setButtonText('Scan with Cam');
      setIsClicked(true);
    } else if (isClicked && !isCamClicked) {
      setIsCamClicked(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header /><br></br>
        <button className="btn btn-primary center-button"
          onClick={handleButtonClick}
          disabled={isCamClicked}
        >
          {buttonText}
        </button>
        {!isCamClicked && (
          <>
            {isClicked ? <Shop /> : <Body />}
          </>
        )}
        {isCamClicked && <WebcamComponent />}
      </header>
    </div>
  );
}

export default App;
