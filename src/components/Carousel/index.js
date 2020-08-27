import React,{useState,useEffect} from 'react'
import Images from "../../Util/ImageUrl/ImageUrl.json"

export default function Carousel() {
    const[imageArray,setImageArray]=useState(Images)
    const[counter,setCounter]=useState(0)

    useEffect(()=>{

        let newCounter = counter
        let myInterval = setTimeout(() => {
            if(counter >= imageArray.length -1){
                setCounter(0)
              
            }else{
                newCounter = counter +1
                setCounter(newCounter)
            }
            console.log(1);
            
        }, 3000);
    },[counter])
        

    
    return (
        <div className=" d-flex justify-content-center">
             <img className="img-fluid " src={imageArray[counter]} alt = "testImage"></img>
        </div>
    )
}
