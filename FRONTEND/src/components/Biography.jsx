import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className="banner">
            <img src={imageUrl} alt="about img" />
        </div>
        <div className="banner">
            <p>Biography</p>
            <h3>Who We Are</h3>
            <p>
            Established in 2023, HOPE! has been a beacon of excellence in healthcare for 1 years. Founded on the principles of compassion, innovation, and integrity, we have been steadfast in our commitment to providing superior medical care to our community. Our team of dedicated healthcare professionals brings together a wealth of expertise and experience to deliver personalized and patient-centered services.
            </p>
            <p>With a focus on innovation, HOPE! leads in healthcare excellence. </p>
            <p>Quality care, compassionate hearts— HOPE!</p>
            <p>Founded on the belief that every individual deserves access to exceptional healthcare, HOPE! has remained dedicated to this mission throughout its journey.</p>
        </div>
    </div>
  )
}

export default Biography