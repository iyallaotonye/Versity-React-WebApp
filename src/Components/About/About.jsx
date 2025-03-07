import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  const [showVideo, setShowVideo] = useState(false)

  const handlePlayButtonClick = () => {
    setShowVideo(true)
  }

  return (
    <div className='about'>
      <div className="about-left">
        {showVideo ? (
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/44V2RJ2oi60"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <>
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={handlePlayButtonClick} />
          </>
        )}
      </div>
      <div className="about-right">
        <h3>ABOUT VERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam nesciunt quisquam dignissimos quas ipsam eos tenetur unde molestias beatae. Quod voluptate commodi officiis inventore nostrum itaque laborum aspernatur delectus nihil.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam nesciunt quisquam dignissimos quas ipsam eos tenetur unde molestias beatae. Quod voluptate commodi officiis inventore nostrum itaque laborum aspernatur delectus nihil.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, necessitatibus sapiente, quisquam excepturi sint pariatur dolorum exercitationem eaque consectetur vel maxime vero dolorem asperiores modi veniam amet quae suscipit? Tempora!</p>
      </div>
    </div>
  )
}

export default About
