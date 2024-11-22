type Props = {
  title: string
  story: string
  name: string
}

const StoryCard = ({ title, story, name }: Props) => {
  return (
    <div className='lg:w-[437px] hover:brightness-125 hover:cursor-pointer h-[235px] flex flex-col justify-between bg-custom-gradient font-nunito rounded-2xl p-5'>
      <h3 className='text-lg font-extrabold'>"{title}"</h3>
      <p className='font-semibold text-[#A8A8A8]'>{story}</p>
      <div className='flex items-center justify-between'>
        <span className='text-lg font-bold'>{name}</span>
        <img src='/stars.png' alt='Rating stars' />
      </div>
    </div>
  )
}

export default StoryCard
