import React, { useEffect, useState } from 'react'
import { BellIcon, } from '@heroicons/react/24/outline'
import Link from 'next/link'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className='flex items-center space-x-2 md:space-x-10'>
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className='hidden space-x-4 md:flex'>
            <li className='headerLink' >Home</li>
            <li className='headerLink'>TV Show</li>
            <li className='headerLink'>Movies</li>
            <li className='headerLink'>New & Popular</li>
            <li className='headerLink'>My List</li>
        </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden w-6 h-6 sm:inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='hidden h-6 w-6 sm:inline'/>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>

        </div>

    </header>
  )
}

export default Header