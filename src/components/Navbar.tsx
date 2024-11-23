import { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'
import Burger from '../assets/burger.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll position to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`${
        isScrolled ? 'bg-black' : 'bg-transparent'
      } text-white fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className='flex items-center max-w-[1728px] mx-auto justify-between p-4 lg:px-10'>
        {/* Logo */}
        <a href='#' className='flex items-center'>
          <img src={Logo} className='h-10 lg:h-[70px]' alt='Logo' />
        </a>

        {/* Mobile Burger Menu Button */}
        <button
          type='button'
          className='w-20 lg:hidden hover:scale-110 focus:outline-none'
          onClick={toggleMenu}
        >
          <img src={Burger} alt='Burger Menu' />
        </button>

        {/* Desktop Links */}
        <div className='justify-end flex-1 hidden lg:flex'>
          <ul className='flex space-x-8 text-2xl font-bold'>
            <li>
              <a href='#features' className='hover:text-gray-400'>
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

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'fixed' : 'hidden'
        } top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center lg:hidden z-50`}
      >
        {/* Close Button */}
        <button
          type='button'
          className='absolute text-6xl text-white top-2 right-9 focus:outline-none'
          onClick={toggleMenu}
        >
          &times;
        </button>

        <ul className='text-xl font-bold text-center'>
          <li className='mb-4'>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#features'
              className='block px-4 py-2 hover:text-gray-400'
            >
              Features
            </a>
          </li>
          <li className='mb-4'>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#results'
              className='block px-4 py-2 hover:text-gray-400'
            >
              Results
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#pricing'
              className='block px-4 py-2 hover:text-gray-400'
            >
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
