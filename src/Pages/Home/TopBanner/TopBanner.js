import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Carousel from 'react-material-ui-carousel'
import Banner from '../Banner/Banner';
import { Button, Typography } from '@mui/material';
import ima from '../../../images/banner/2eahheh.jpg'
import './TopBanner.css'

const TopBanner = () => {
    const [state]=useState({
        title : "WELCOME",
        titleTwo : "TO OUR SHOP",
        titleThree : "DREAM WATCH & OPTICS",
        img:ima
  });
    // const items = [
    //     {
    //         img:"https://i.ibb.co/mXQ6VGk/slide2.jpg"
    //     },
    //     {
    //         img:"https://i.ibb.co/nBCQz9V/slide1.png"
    //     },
    //     {
    //         img:"https://i.ibb.co/z5kCTnx/slide3.jpg"
    //     },
    //     {
    //         img:"https://i.ibb.co/3kdfWx4/slide4.jpg"
    //     },
    // ]
    return (
       
        <div className = "home">
        <div className="home-intro">
            <h2>
                <div className="title">{state.title}</div>
                <div className="titleTwo">{state.titleTwo}</div>
                <div className="titleThree">{state.titleThree}</div>
            </h2>
            <div className="text">
              <Typewriter
                options = {{
                    autoStart:true,
                    loop:true,
                    delay:40,
                    strings: [
                        "CHOOSE YOUR WATCH",
                        "GRAB YOUR SUNGLASS",
                        "DEFINE THE PERFECT YOU"
                    ],
                 }}
              
              ></Typewriter>
            </div>
        </div>
     </div>
        // <Carousel>
        //     {
        //         items.map(item => <Banner
        //             item={item}
                
        //         ></Banner>)
        //     }
        //     </Carousel>
        
    );
 };

export default TopBanner;