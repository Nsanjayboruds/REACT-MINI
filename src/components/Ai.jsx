import React from 'react'
import { useEffect, useState } from "react";
import Header from './Header';
import LetterGlitch from './LetterGlitch';


function Ai() {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";

    script.onload = () => {
      setIsScriptLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div >
      
      <div >
       
        {isScriptLoaded && (
          <elevenlabs-convai agent-id="agent_7201k24jbepsfkxbh3h6wkkfzygb"></elevenlabs-convai>
        )}
      </div>
    </div>
  )
}

export default Ai