const Subscription = () => {
  return (
    <section id='pricing' className='mb-40 overflow-hidden lg:mb-60 '>
      <div className="h-[550px] bg-no-repeat z-0 w-full absolute bg-[url('/bg-charting.png')] bg-cover bg-center blur-3xl transform scale-x-[-1]" />
      <h2 className='text-3xl px-4 mb-20 lg:text-6xl font-semibold text-center leading-[119%] mx-auto'>
        Subscription Plans
      </h2>
      <div className='relative z-10 flex flex-col items-center justify-center mx-5 lg:flex-row gap-9'>
        {/* card */}
        <div className='flex flex-col items-center justify-center p-8 border w-fit rounded-3xl'>
          <h5 className='text-2xl font-medium'>Monthly</h5>
          <p className='pt-2 text-lg opacity-50'>Exclusive Price</p>
          <h3 className='font-extrabold text-[40px] py-10'>49.99/m</h3>
          <button className='border-2 mb-10 flex items-center gap-10 font-semibold text-lg mx-auto w-full justify-center hover:scale-110 border-white px-12 py-[18px] rounded-[45px]'>
            Get Started
          </button>
          <div className='flex flex-col gap-5 pt-5 border-t'>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>
                Signals & Overlays Toolkit
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>
                Delta Volume Oscillators
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>
                Real-Time Alert Notifications
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>Community Access</span>
            </div>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>24/7 Support</span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className='flex flex-col items-center justify-center p-8 border w-fit rounded-3xl'>
          <h5 className='text-2xl font-medium'>Yearly</h5>
          <p className='pt-2 text-lg opacity-50'>save $120 every year</p>
          <h3 className='font-extrabold text-[40px] py-10'>480/y</h3>
          <button className='border-2 mb-10 flex items-center gap-10 font-semibold text-lg mx-auto w-full justify-center hover:scale-110 bg-white text-black border-white px-12 py-[18px] rounded-[45px]'>
            Get Started
          </button>
          <div className='flex flex-col gap-5 pt-5 border-t'>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>
                Signals & Overlays Toolkit
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>
                Delta Volume Oscillators
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>
                Real-Time Alert Notifications
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>Community Access</span>
            </div>
            <div className='flex items-center gap-3'>
              <img src='/check.svg' alt='' />
              <span className='text-lg opacity-50'>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription
