
import './App.css'
// import Footer2 from './components/footerAlternative/Footer'
import Gallery from './components/gallery/Gallery'
import RegistrationPoster from './components/register/RegistrationPoster'
import Sponsors from './components/Sponsors/Sponsors'
import Button from './components/handles/handles'
import Footer from './components/footer/footer';
import IntroFunc from './components/intro/intro'
import whypart from  './components/why_to_participate/why_to_part';
import { useState } from 'react'


function App() {

  const [cta, setCTA] = useState('Get, Set, CODE & FUN ❤️!');

  function changeCTA(){
    setCTA('Registrations starting soon ❤️');
  }

  return (
    <>
      <h1 className='text-6xl font-bold font-fairdisplay italic 
      bg-gradient-to-r from-purple-400 via-green-300 to-blue-500 text-transparent
       bg-clip-text'>AVINYA
        <span className='text-red-500 mx-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>2023</span></h1>

      <div className='flex flex-row px-[20%] mt-7 mb-9'>
        <img src="public/programmer.png" alt="image" className='w-[50%] mr-16' />

        <img src="public/VR.png" alt="image" className='w-[50%]' />
      </div>

      <IntroFunc/>
      
      <RegistrationPoster/>
      <whypart /> {/*why to participate*/}
      <Gallery /> 
      
      {/* Join Button */}
      <Button />

      <Sponsors />

      <div className='flex flex-row px-[10%] mt-7 mb-4'>
        <img src="public/desk.png" alt="image" className='w-[80%] mx-[15%]' />
      </div>

      <div className='mt-6 mb-4'>
        <button className='text-2xl bg-green-200 hover:bg-green-300 text-slate-950 transition-all
         hover:scale-[102%] hover:text-slate-900' onClick={changeCTA}>{cta}</button>
      </div>

      <Footer />
 
    </>
  )
}

export default App
