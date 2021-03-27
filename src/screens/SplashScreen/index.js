import React from "react";

// importing stylesheet
import './style.css';

function SplashScreen() {
  return (
    <div className="splash">
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_nkw7thfk.json"
        background="transparent"
        speed="2"
        style={{ width: '400px' }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}

export default SplashScreen;
