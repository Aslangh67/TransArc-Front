import React, { useState, useEffect } from 'react';
import Row1 from "../../components/Row1"
import Row2 from "../../components/Row2"
import "./style.css"

function Home() {
useEffect(()=>{
    console.log(window.innerWidth);
})
  
  return (
    <div className="container-fluid  " >
  
        <Row1/>
        <Row2/>

        {/* <Video/> */}
    </div>
  )

}

export default Home;

