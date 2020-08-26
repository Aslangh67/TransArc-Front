import React from "react"
import "./style.css"
import testImage from "../../Util/Images/test.webp"


export default function row2() {

    return (
        <div className="row images pt-4 d-flex justify-content-center">
            <div className="col-12">
            <img className="img-fluid" src={testImage} alt = "testImage"></img>
            </div>
        </div>
    )
}