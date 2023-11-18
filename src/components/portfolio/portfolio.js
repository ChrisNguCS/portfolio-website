import React from 'react'
import './portfolio.css'
import Project1 from '../../assets/portfolio-1.png'


const Portfolio = () => {
  return (
    <section className="projects">
        <h2 className="portfolioTitle">
            My Portfolio
            <span className="portfolioDesc">
                These are all of my projects so far
            </span>
            <div className="projectDisplay">
                <img src={Project1} alt='' className='projectImg' />
                <img src='' alt='' className='projectImg' />
                <img src='' alt='' className='projectImg' />
                <img src='' alt='' className='projectImg' />
                <img src='' alt='' className='projectImg' />
                <img src='' alt='' className='projectImg' />
            </div>
        </h2>
    </section>
  )
}

export default Portfolio