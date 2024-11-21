import Activities from './components/Activities'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className='max-w-[1728px] font-sans mx-auto h-screen bg-black text-white'>
      <Header />
      <Main />
      <Activities />
    </div>
  )
}

export default App
