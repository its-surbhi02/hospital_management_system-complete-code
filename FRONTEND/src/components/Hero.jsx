import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className="banner">
            <h1>{title}</h1>
            <p>
            Step into the world of HOPE!, where compassion converges with cutting-edge medical expertise. Our institute is dedicated to placing your wellness and comfort at the forefront of everything we do. Our team comprises passionate healthcare professionals who are deeply committed to delivering tailored, premium care that aligns with your individual needs.
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className='animated-image' />
            <span>
                <img src="/Vector.png" alt="vector" />
            </span>
        </div>

    </div>
  )
}

export default Hero