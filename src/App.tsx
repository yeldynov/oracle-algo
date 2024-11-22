import Activities from './components/Activities'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Subscription from './components/Subscription'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className='max-w-[1728px] font-sans mx-auto bg-black text-white'>
      <Header />
      <Main />
      <Activities />
      <Testimonials />
      <Subscription />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
