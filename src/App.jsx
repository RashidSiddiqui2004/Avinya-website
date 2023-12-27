
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./components/home/Home"; 
import TeamPage from "./components/team/TeamPage"; 


function App() {

  return (

    <div className="h-screen w-screen">
    
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/team" element={<TeamPage/>}/>
        </Routes>
    </Router>
  </div>
    );
}

export default App;
