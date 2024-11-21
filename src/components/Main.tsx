const Main = () => {
  return (
    <div
      id='features'
      className='relative text-black bg-[#F5F5F7] p-5 lg:p-[146px] w-full mx-auto mt-5 lg:mt-0 '
    >
      {/* <img
        className='relative mx-auto lg:-top-72'
        src='/public/laptop.png'
        alt=''
      /> */}
      <div className='flex relative flex-col gap-[45px]'>
        <h2 className='text-3xl font-semibold lg:text-6xl'>
          Trading made effortless
        </h2>
        <p className='text-xl font-medium lg:text-3xl'>
          Access advanced analysis, providing the earliest indications of
          trending price movement.
        </p>

        <div className='flex flex-col lg:flex-row gap-[30px] '>
          <div className='bg-white border p-3.5 flex flex-col gap-3.5 border-gray-300 rounded-lg'>
            <h2 className='text-[#ADADAD] text-5xl font-medium'>01.</h2>
            <h3 className='text-xl font-semibold'>Multiple Markets</h3>
            <p className='text-[15px] font-medium text-[#8C8C8C]'>
              OracleAlgo works with any market with sufficient volume. Including
              stocks, forex, crypto, indices, and futures.
            </p>
          </div>
          <div className='bg-white border p-3.5 flex flex-col gap-3.5 border-gray-300 rounded-lg'>
            <h2 className='text-[#ADADAD] text-5xl font-medium'>02.</h2>
            <h3 className='text-xl font-semibold'>Risk Management</h3>
            <p className='text-[15px] font-medium text-[#8C8C8C]'>
              OracleAlgo places an emphasis on risk management by identifying
              optimal confluences for entries, take profits and stoplosses.
            </p>
          </div>
          <div className='bg-white border p-3.5 flex flex-col gap-3.5 border-gray-300 rounded-lg'>
            <h2 className='text-[#ADADAD] text-5xl font-medium'>03.</h2>
            <h3 className='text-xl font-semibold'>Strategy Sensitivity</h3>
            <p className='text-[15px] font-medium text-[#8C8C8C]'>
              You can change the sensitivity of the indicator to be more or less
              aggressive based on your preferred trading style.
            </p>
          </div>
          <div className='bg-white border p-3.5 flex flex-col gap-3.5 border-gray-300 rounded-lg'>
            <h2 className='text-[#ADADAD] text-5xl font-medium'>04.</h2>
            <h3 className='text-xl font-semibold'>Exclusive Indicators</h3>
            <p className='text-[15px] font-medium text-[#8C8C8C]'>
              You can change the sensitivity of the indicator to be more or less
              aggressive based on your preferred trading style.
            </p>
          </div>
          <div className='bg-white border p-3.5 flex flex-col gap-3.5 border-gray-300 rounded-lg'>
            <h2 className='text-[#ADADAD] text-5xl font-medium'>05.</h2>
            <h3 className='text-xl font-semibold'>Exclusive Indicators</h3>
            <p className='text-[15px] font-medium text-[#8C8C8C]'>
              OracleAlgo includes many exclusive indicators like market
              structure mapping, breakouts, trends, volume oscillators + so much
              more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
