import React from 'react'
import './Hero.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


function Hero() {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return  <ScrollContainer>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        
        <span style={{ fontSize: "30px" }}>Build Drop isn't just a tool.</span>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>It's the way to build ecom stores.</span>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={FadeUp}>
      <img src="https://gcdnb.pbrd.co/images/E2fdVOuSkLej.png?o=1" alt="" />
       
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
        <span style={{ fontSize: "40px" }}>
          <Animator animation={MoveIn(-1000, 0)}>Easy</Animator>
          <Animator animation={MoveIn(1000, 0)}>Robust</Animator>
          {/* Secure */}
          <Animator animation={MoveOut(1000, 0)}>Secure</Animator>
          <Animator animation={MoveOut(-1000, 0)}>That's Build Drop</Animator>
        </span>
      </div>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span style={{ fontSize: "60px" }}>Try it today.</span>
        <br/>
        <span style={{ fontSize: "30px" }}>
         Start using Build Drop and change the way you build your ecommerce stores. 
        </span>
        <br />
        <br />
    <a><button className="btn btn-wide bg-indigo-600 text-white uppercase" >Get free access.</button></a> 

      </Animator>
    </ScrollPage>
  </ScrollContainer>
}

export default Hero

