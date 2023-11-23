import React from 'react'
import './portfolio.css'
import Project1 from '../../assets/portfolio-1.png'
import Project2 from '../../assets/portfolio-1.png'
import Project3 from '../../assets/portfolio-1.png'
import Project4 from '../../assets/portfolio-1.png'

const Portfolio = () => {
  return (
    <section id="projects">
      <h2 className="portfolioTitle">
        My Portfolio
        </h2>
      <span className="portfolioDesc">
          These are all of my projects so far
      </span>
        <div className="projectDisplay">
          <img src={Project1} alt='' className='projectImg' />
          <img src={Project2} alt='' className='projectImg' />
          <img src={Project3} alt='' className='projectImg' />
          <img src={Project4} alt='' className='projectImg' />
          <img src='' alt='' className='projectImg' />
        </div>
    </section>
  )
}

export default Portfolio