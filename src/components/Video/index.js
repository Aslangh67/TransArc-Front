import React ,{useState,useEffect} from 'react'
import Reactplayer from "react-player"
import "./style.css"


export default function Video() {
const[screen, setScreen]=useState("100%")

useEffect(()=>{
if(window.innerWidth > 1700){
    setScreen("70%")
}
},[])
    return (
        <div id="video" >
            <Reactplayer className="player" url="https://www.youtube.com/watch?v=MrRvX5I8PyY" playing={true} loop={true} width={screen} height={screen}  volume="0"  />
        </div>
    )
}
