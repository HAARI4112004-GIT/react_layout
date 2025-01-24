import React from "react";
import blackimg from '../assets/Black_background.jpg'
import stl from './work.module.css'
import { HiBars3 } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import man from '../assets/manmiddle.jpeg'

function First() {
    return (
      <>
         <div className={stl.imm}>
            <div className={stl.heder}>
              <HiBars3 className={stl.ico}/>
              <div className={stl.serch}>
                  <IoMdSearch className={stl.ico}/>
              </div>
            </div>           
             <div className={stl.bdy}>
              <div className={stl.leftt}>
                <div className={stl.leftmatter}>
                  <div className={stl.leftmain}>JOIN THE CONCERT</div>
                  <div className={stl.midmatter}>Learn tos sing with beautiful voice with us. Not evey one hasbeautiful voices, but we will train your voice to love the way it was.</div>
                  <div className={stl.downmatter}>
                    <div className={stl.buttonn}>SCHEDULES</div>
                    <div className={stl.buttonn}>LEARN MORE</div>
                  </div>
                </div>
              </div>
              
              <div className={stl.midpic}><img src={man} className={stl.manimg}/></div>
              <div className={stl.rightmatter}>
                <div className={stl.rightinner}>
                  <div className={stl.rightcard}>
                    <div className={stl.rigtbutt}></div>
                    <div className={stl.point}>08.12</div>
                    <div className={stl.pointdown}>The Black Punch Heach Of The Earth Rock Is Not In The Wall</div>
                  </div>
                  <div className={stl.rightcard}>
                    <div className={stl.rigtbutt}></div>
                    <div className={stl.point}>09.15</div>
                    <div className={stl.pointdown}>The Black Punch Heach Of The Earth Rock Is Not In The Wall</div>
                  </div>
                  <div className={stl.rightcard}>
                    <div className={stl.point}>10.12</div>
                    <div className={stl.pointdown}>The Black Punch Heach Of The Earth Rock Is Not In The Wall</div>
                    <div className={stl.rigtbutt}></div>
                  </div>
                  <div className={stl.rightcard}>
                    <div className={stl.point}>10.28</div>
                    <div className={stl.pointdown}>The Black Punch Heach Of The Earth Rock Is Not In The Wall</div>
                    <div className={stl.rigtbutt}></div>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </>
    )
  }
  
  export default First