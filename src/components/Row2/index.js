import React from "react"
import "./style.css"
import testImage from "../../Util/Images/test.webp"
import Carousel from "../Carousel"


export default function row2() {

    return (
        <div className="row images pt-2 ">
            
            <div className="col-12">
            
           <Carousel/>
            </div>
        </div>
    )
}