import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">
          What I do
        </span>
        <span className="skillDesc">
          I am a passionate software developer with experience in both front and backend development
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="" className="skillBarImg" />
            <div className="skillText">
              <h2>UI Design</h2>
              <p>test test test</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="" className="skillBarImg" />
            <div className="skillText">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="" className="skillBarImg" />
            <div className="skillText">
              <h2></h2>
              <p></p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Skills