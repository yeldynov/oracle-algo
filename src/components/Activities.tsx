const Activities = () => {
  return (
    <div className='text-white py-10 lg:py-[217px] relative bg-black'>
      <div className='relative z-10'>
        <h2 className='text-3xl px-4 lg:text-6xl font-semibold text-center leading-[119%] lg:w-[1002px] mx-auto'>
          Take Full control of your Trading Activites
        </h2>
        <div className='flex flex-col relative overflow-hidden lg:flex-row mt-8 lg:p-20 rounded-2xl mx-5 lg:mx-[94px] border  border-gray-100'>
          <div className="h-[550px]  bg-no-repeat z-0 w-[1488px] absolute bg-[url('/bg-charting.png')] bg-cover bg-center blur-2xl" />
          {/* left */}
          <div className='relative z-10 flex flex-col lg:flex-row'>
            <div className='flex flex-col items-center justify-center flex-1 gap-12 p-5 lg:p-0'>
              <h3 className='font-semibold text-center lg:text-left leading-[119%] text-2xl lg:text-[50px]'>
                Advanced Charting Tools
              </h3>
              <p className='text-lg lg:pr-10 lg:text-xl'>
                Streamlines charting by automatically plotting crucial data on
                your chart. A time-saver that eliminates guesswork, a powerful
                confluence tool, highlighting key price reversal levels such as
                supply & demand zones, order blocks, fair value gaps, market
                structure mapping + breakout probability.
              </p>
            </div>
            {/* right */}
            <div className='flex-1 m-4'>
              <img src='/public/ipad.png' alt='' />
            </div>
          </div>
        </div>
        <div className=' flex flex-col lg:flex-row gap-[37px]'>
          {/* 2 */}
          <div className='flex flex-col overflow-hidden relative mx-5 p-5 mt-8 lg:p-10 rounded-2xl lg:ml-[94px] border border-gray-100'>
            <div className="h-[275px] bg-no-repeat z-0 w-[600px] absolute bg-[url('/trend-bg.png')] bg-cover bg-center blur-2xl" />
            <div className='relative z-10'>
              {/* top */}
              <div className='flex flex-col justify-center gap-12'>
                <h3 className='font-semibold text-center lg:text-left leading-[119%] text-2xl lg:text-[50px]'>
                  Advanced Trend
                </h3>
                <p className='text-lg lg:pr-10'>
                  Elevate your trading game and receive clarity on the charts
                  trend strength, volatility, momentum, volume & EMA's with our
                  unique trend table, trend Lines, trend Channel, trend Candles
                  which is your all-in-one solution for mastering price action
                  and staying ahead of market trends.
                </p>
              </div>
              {/* bottom */}
              <div className=''>
                <img src='/public/trend.png' alt='' />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className='flex mx-5 overflow-hidden relative flex-col mt-8 p-5 lg:p-10 rounded-2xl lg:mr-[94px] border border-gray-100'>
            <div className="h-[275px] bg-no-repeat z-0 w-[600px] absolute bg-[url('/trend-bg.png')] bg-cover bg-center blur-2xl rotate-180" />
            <div className='relative z-10'>
              {/* top */}
              <div className='flex flex-col justify-center gap-12'>
                <h3 className='font-semibold text-center lg:text-left leading-[119%] text-2xl lg:text-[50px]'>
                  Advanced Oscillator
                </h3>
                <p className='text-lg lg:pr-10'>
                  Streamlines charting by automatically plotting crucial data on
                  your chart. A time-saver that eliminates guesswork, a powerful
                  confluence tool, highlighting key price reversal levels such
                  as supply & demand zones, order blocks, fair value gaps,
                  market structure mapping + breakout probability.
                </p>
              </div>
              {/* bottom */}
              <div className=''>
                <img src='/public/oscillator.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
