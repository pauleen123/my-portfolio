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
     <a href='' className='cta-btn'>Resume</a>
    </div>
  )
}
