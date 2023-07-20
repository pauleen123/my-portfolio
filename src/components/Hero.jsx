import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero-container'>
        <Image src="public/images/profile.jpg" className='profile-img' width={300} height={300} alt='paulines personal headshot'/>
        <div className='hero-text'>
            <h1>Hey, I'm Pauline 👋</h1>
            <p>
                I am a software developer based in Nairobi,Kenya. I enjoy building and designing exceptional websites, applications and everything inbetween.
            </p>
            <div className='social-icons'>
            <a
            href="https://github.com/pauleen123"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pauline-gitonga-a9a0a1136/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

            </div>

        </div>

    </div>
  )
}

export default Hero