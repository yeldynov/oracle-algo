import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Burger from '../assets/burger.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='bg-darkGray text-white'>
      <div className='mx-10 flex flex-wrap items-center justify-between p-4'>
        {/* Logo */}
        <a href='/' className='flex mx-[19px] items-center'>
          <img src={Logo} className='h-[70px]' alt='Flowbite Logo' />
        </a>

        {/* Mobile Burger Menu Button */}
        <div className='flex lg:order-2 space-x-3 rtl:space-x-reverse'>
          <button
            type='button'
            className='hover:scale-110'
            onClick={toggleMenu}
          >
            <img src={Burger} alt='Burger Menu' />
          </button>
        </div>

        {/* Desktop Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:w-auto lg:order-1`}
          id='navbar-sticky'
        >
          <ul className='flex flex-col text-[25px] p-4 lg:p-0 mt-4 font-bold border rounded-lg lg:space-x-16 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 text-white bg-darkGray lg:bg-transparent'>
            <li>
              <a
                href='#features'
                className='hover:text-gray-400'
                aria-current='page'
              >
                Features
              </a>
            </li>
            <li>
              <a href='#results' className='hover:text-gray-400'>
                Results
              </a>
            </li>
            <li>
              <a href='#pricing' className='hover:text-gray-400'>
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
