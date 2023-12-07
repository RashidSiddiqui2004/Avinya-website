 
import './App.css' 
import Gallery from './components/Gallery/Gallery'
import Sponsors from './components/Sponsors/Sponsors'

function App() { 

  return (
    <> 
      <h1 className='text-6xl font-bold'>AVINYA 2023</h1> 

      <div>
        <Gallery/>
      </div>
 
      <div>
        <Sponsors/>
      </div>
    </>
  )
}

export default App
