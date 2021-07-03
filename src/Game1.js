import React,{useState, useEffect, Suspense} from "react";

import Unity, { UnityContent } from "react-unity-webgl";



export default function Game1(props) {

    const unityContext = new UnityContent(
        'build/ball_juggle.json',
        'build/UnityLoader.js',
      );

    

    const toFullScreen = ()=>{
    let can =   document.getElementsByClassName('canvas')
    can[0].style.width = `${window.innerWidth}px`
    can[0].style.height = `${window.innerHeight}px`
    }

    const [progression, setProgression] = useState(0);

    useEffect(()=>{
    toFullScreen()

    unityContext.on("progress", function (progression) {
        setProgression(progression);
        if(progression >= 1 ){
        toFullScreen()
        }
    });
    
    },[])
      
    return (
    <div className='bg-dark game-container'  >
        <Unity className={'canvas'}  unityContent={unityContext}  />
        {
          progression < 1 &&  <div  className="loading-game text-white">
            <p>Loading {Math.floor(progression * 100)} %</p>
            <br />
            <p> installing game... <br /> <br /> it will take atleast 2 min</p>
        </div> } 
        
        
    </div>
    );
}

const LoadingScreen = ({progression})=>{

    
}
