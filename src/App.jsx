
import './App.css'
// import Footer from './components/footerAlternative/Footer'
import Gallery from './components/gallery/Gallery'
import RegistrationPoster from './components/register/RegistrationPoster'
import Sponsors from './components/Sponsors/Sponsors'
import Button from './components/handles/handles'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <h1 className='text-6xl font-bold font-fairdisplay italic 
      bg-gradient-to-r from-purple-400 via-green-300 to-blue-500 text-transparent
       bg-clip-text'>AVINYA
        <span className='text-red-500 mx-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>2023</span></h1>

      <div className='flex flex-row px-[20%] mt-7'>
        <img src="public/programmer.png" alt="image" className='w-[50%]' />

        <img src="public/VR.png" alt="image" className='w-[50%]' />
      </div>

 
     <RegistrationPoster />
      <Gallery />

      <Button />

      <Sponsors />

      <div className='flex flex-row px-[10%] mt-3 mb-4'>
        <img src="public/desk.png" alt="image" className='w-[80%] mx-[15%]' />
      </div>

      <div className='my-2'>
        <Footer />
      </div>

 
    </>
  )
}

export default App
