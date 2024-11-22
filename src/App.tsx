import Activities from './components/Activities'
import Header from './components/Header'
import Main from './components/Main'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className='max-w-[1728px] font-sans  mx-auto h-screen bg-black text-white'>
      <Header />
      <Main />
      <Activities />
      <Testimonials />
    </div>
  )
}

export default App
