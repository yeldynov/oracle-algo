import { HiArrowRight } from 'react-icons/hi'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='h-screen relative overflow-hidden bg-[url("/hero-bgMain.png")]'>
      <div className='h-[1620px] w-[1940px]  absolute -top-[426px] -left-[132px] bg-[url("/hero-bg.png")]' />
      <div className='z-30'>
        <Navbar />
        {/* hero top */}
        <div className='flex pt-32 flex-col  items-center space-y-10 text-center lg:w-[1091px] mx-auto'>
          <h1 className='text-3xl font-bold lg:text-6xl'>
            Clear Signals, Confident Trades
          </h1>
          <p className='mx-4 text-xl font-medium lg:text-3xl'>
            Find confluence in every trade with our powerful trading tools,
            signals and alerts used by 5,000+ people globablly.
          </p>
          <button className='lg:border-4 border-2 flex items-center gap-10 font-bold lg:text-3xl text-xl justify-center hover:scale-110 border-white px-12 py-[18px] rounded-[45px]'>
            Subscribe
            <HiArrowRight />
          </button>
        </div>
        {/* hero bottom */}
        <div className='mt-[87px] lg:w-[1132px] mx-auto flex flex-col gap-10 lg:flex-row items-center justify-between text-center'>
          <div className='space-y-4'>
            <h2 className='text-5xl font-bold'>5,000+</h2>
            <p className='text-3xl font-bold text-[#929292]'>Verified users</p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-5xl font-bold'>20+</h2>
            <p className='text-3xl font-bold text-[#929292]'>
              Premium features
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-5xl font-bold'>95%</h2>
            <p className='text-3xl font-bold text-[#929292]'>
              Positive feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
