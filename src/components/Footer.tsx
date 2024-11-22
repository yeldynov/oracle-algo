import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='lg:mx-[150px] 2xl:mx-[307px] border-t border-gray-700 lg:mt-40 pt-10 lg:pb-40 pb-20'>
      {/* top */}
      <div className='flex flex-col items-center justify-between gap-10 lg:flex-row'>
        {/* Logo */}
        <a href='/' className='flex mx-[19px] items-center'>
          <img src={Logo} className='h-[33.18px]' alt='Flowbite Logo' />
        </a>
        <div className='flex gap-5'>
          <a href='#features' className='text-lg hover:underline'>
            Features
          </a>
          <a href='#pricing' className='text-lg hover:underline'>
            Pricing
          </a>
          <a href='#faq' className='text-lg hover:underline'>
            FAQs
          </a>
        </div>
      </div>
      {/* bottom */}
      <div className='flex flex-col items-center justify-center gap-5 pt-16 opacity-50 lg:flex-row'>
        <a
          href='https://yeldynov.netlify.app/'
          target='_blank'
          className='text-lg hover:underline'
        >
          © Copyright Nikita Yeldynov
        </a>
        <span>|</span>
        <a href='/' className='text-lg hover:underline'>
          Terms & Conditions
        </a>
        <span>|</span>
        <a href='#faq' className='text-lg hover:underline'>
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer
