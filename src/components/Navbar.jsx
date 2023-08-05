// import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='nav-container'>
     <div className='nav-logo'>
        <Link href={'/'}>
            Pauline's Portfolio
        </Link>
     </div>
     <a href="https://docs.google.com/document/d/10ZosQ38Z3804KYPcb_aZp9bceoXK-q3GrkHjYshqIRE/edit?usp=sharing" className="cta-btn">Resume</a>
    </div>
  )
}
