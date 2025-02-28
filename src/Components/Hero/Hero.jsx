import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Education For A Better World</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste tenetur quasi doloribus sint tempora? Deserunt consequatur voluptatibus, delectus, cumque suscipit temporibus nostrum autem nihil atque distinctio optio excepturi, placeat nisi.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
