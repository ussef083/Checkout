import React from 'react'
import Image from 'next/image'
import logo from '@/public/nike.svg'


const Header = () => {
  return (
    <nav className='flex items-center justify-center p-7 border-b border-black mb-7'>
        <Image src={logo} width={0} height={0} alt='nike-logo' priority style={{width:'40px', height: "auto" }}/>
    </nav>
  )
}

export default Header