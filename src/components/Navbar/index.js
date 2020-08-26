import React ,{useState,useEffect} from "react";
import Logo from "../../Util/Logo/logo.webp"
import StartText from "../StartText"
import "./style.css"


function Navbar() {

const [visible, setVisible]= useState(true)

useEffect(()=>{
setTimeout(()=>{
    setVisible(false)
},3800)
},[])
useEffect(()=>{
setTimeout(()=>{
    window.scrollTo(0,0)},500)
},[])


    return (
        <>
             {visible?  <StartText/>:null}
            <nav className="navbar navbar-expand-lg myNav ">
                <img className="logo img-fluid " src={Logo} ></img>
                {/* <div className="links">
                <a href="#">Home</a>
                <br/>
                <a href="#">Library</a>
            </div> */}
                <div >
                    <button className="navbar-toggler mx-auto " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">▼</span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    
          
        </>
    )
};

export default Navbar;