const Main = () => {
  return (
    <div
      id='features'
      className='relative text-black bg-[#F5F5F7] p-[146px] w-full mx-auto mt-10 lg:mt-0 min-h-screen'
    >
      {/* <img
        className='relative mx-auto lg:-top-36'
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
      </div>
    </div>
  )
}

export default Main
