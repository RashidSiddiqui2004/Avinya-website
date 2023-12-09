
import './App.css' 
import Gallery from './components/gallery/Gallery'
import Sponsors from './components/Sponsors/Sponsors'
import Button from './components/handles/handles'

function App() {

  return (
    <>
      <h1 className='text-6xl font-bold font-fairdisplay italic 
      bg-gradient-to-r from-purple-400 via-green-300 to-blue-500 text-transparent bg-clip-text'>AVINYA
        <span className='text-red-500 mx-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>2023</span></h1>

      <div className='flex flex-row mx-[10%]'>
        <img src="public/programmer.png" alt="" />

        <img src="public/discussionDS.png" alt="" />
      </div>
 
 
      <Gallery /> 
      <div>
      <h1>JOIN OUR DISCORD SERVER TO STAY UPDATED</h1>
      <Button />
      </div>
      <Sponsors />
  
    </>
  )
}

export default App
