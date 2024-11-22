import StoryCard from './StoryCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    id: 1,
    title: 'This indicator is insane, it powers up my trading so much.',
    story:
      'The traders in this server are the most accurate I have ever seen and the knowledge that you can get here is infinite.',
    name: 'r3ywtf',
  },
  {
    id: 2,
    title: "OracleAlgo is the best free indicator I've ever seen.",
    story:
      "I am a beginner trader and don't really understand how to set up a trading strategy correctly, but this indicator and its guide really help me make decisions more easily.",
    name: 'JackBT142',
  },
  {
    id: 3,
    title: "This indicator is one of the best I've seen as far as integrated.",
    story:
      'Targeted analysis goes. It simplifies adding confluence to trading ideas. The indicator does the heavy lifting, leaving you to analyze and execute. Awesome work.',
    name: 'nuhuhuh99',
  },
  {
    id: 4,
    title: 'Oracle is one of the best tools we can have in the market.',
    story:
      'The indicator is perfectly matched with time and quick market moves. The best thing to ever happened in my trading journey. Thanks to Caleb and his team for the great product, really proud to be part of Unity Academy.',
    name: 'captain_a1',
  },
  {
    id: 5,
    title: 'OracleAlgo is a really time saver.',
    story:
      'It does all the time-consuming part of TA. Simple settings and you have all the data you need to start. Then you add your things, and magic happens. It can save years by pointing on things that you sometimes don’t check. Love it!',
    name: 'maxouhell',
  },
  {
    id: 6,
    title: 'OracleAlgo is honestly a must-have for traders seeking.',
    story:
      'OracleAlgo is honestly a must-have for traders seeking simplified analysis and strategic advantage in the markets.',
    name: 'glob#0503',
  },
  {
    id: 7,
    title: 'OracleAlgo is the best tools for trading I’ve ever use!',
    story:
      'OracleAlgo is the best tools for trading I’ve ever use! It gives perfectly accurate indicator that enhance my confidence on making trade decision.',
    name: 'wolfiess',
  },
  {
    id: 8,
    title: 'OracleAlgo is the best indicator for the best community!',
    story:
      'OracleAlgo helps you understand the direction of the market and your strategy starting from a solid and precise basis. I am really satisfied with this tool because since I’ve been using it my performance has definitely improved!',
    name: 'lightdiamond',
  },
  {
    id: 9,
    title:
      'I highly recommend OracleAlgo Trading indicator, especially for beginners.',
    story:
      'It’s an essential tool providing efficiency, time savings, and a user-friendly experience – exactly what newcomers need in navigating the complexities of the market.',
    name: '.king_sivaa',
  },
  {
    id: 10,
    title: 'OracleAlgo really upgraded my strategy massively.',
    story:
      'OracleAlgo really upgraded my strategy massively, and saved me a lot of time for my TA. I’m really impressed about the indicator and am amazed every day with Unity Academy community!',
    name: 'alfa618',
  },
  {
    id: 11,
    title: 'OracleAlgo has transformed my crypto trading experience.',
    story:
      'Delivering unparalleled accuracy and reliability. The Unity user-friendly experience, providing great assistance where you need it the most. Oracle is a must-have. Five stars without a doubt.',
    name: 'Gryphus987',
  },
]

const Testimonials = () => {
  return (
    <div className='bg-black pb-[260px] border-none overflow-x-hidden'>
      <h2 className='text-3xl px-4 lg:text-6xl font-semibold text-center leading-[119%] lg:w-[1002px] mx-auto'>
        Real Traders, Real Stories
      </h2>
      <div className='lg:w-[108%] pt-[100px] w-[90%] overflow-x-hidden mx-auto lg:mx-0'>
        <Swiper
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide>
              <StoryCard name={t.name} title={t.title} story={t.story} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
