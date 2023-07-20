import React from 'react'

export default function Footer() {
  return (
    <div>
        <hr/>
        <div className='footer-container'>
            <p>
            © {new Date().getFullYear()} Pauline's Portfolio
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
