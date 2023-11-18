import React from 'react'
import './skills.css';
import Language from '../../assets/language.svg'
import Framework from '../../assets/framework.svg'
import libraries from '../../assets/libraries.svg'


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">
          My Skills
        </span>
        <span className="skillDesc">
          I am a passionate software developer with experience in both front and backend development
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={Language} alt="" className="skillBarImg" />
            <div className="skillText">
              <h2>Programming Languages</h2>
              <p>Python | Java | C/C++ | SQL (SQLite) | JavaScript | TypeScript | HTML/CSS</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Framework} alt="" className="skillBarImg" />
            <div className="skillText">
              <h2>Frameworks</h2>
              <p>React Native | Expo | Django</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={libraries} alt="" className="skillBarImg" />
            <div className="skillText">
              <h2>Libraries</h2>
              <p>React | Requests | OS | NumPy | BS4 | Discord.py | Selenium</p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Skills