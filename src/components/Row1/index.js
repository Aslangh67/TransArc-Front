import React from "react"
import "./style.css"
import testImage from "../../Util/Images/test.webp"

export default function TransRow1() {

    return (
        <div className="row top pt-4">
            <div className="col-md-7">
                <div className="row">
                    <img src={testImage} className="col-md-12 iL1 test" ></img>
                </div>
                <div className="row">
                    <img src={testImage}  className="col-md-6 iL2 test"></img>
                    <img src={testImage}  className="col-md-6 iL3 test"></img>
                </div>
            </div>
            <div className="col-md-5">
                <div className="row">
                    <img src={testImage}  className="col-md-6 iR1 test"></img>
                    <img src={testImage}  className="col-md-6 iR2 test"></img>
                </div>
                <div className="row">
                    <img src={testImage}  className="col-md-12 iR3 test"></img>
                </div>
            </div>
        </div>
    )
}