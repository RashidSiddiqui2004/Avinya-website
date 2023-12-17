
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./components/home/Home"; 
import TeamPage from "./components/team/TeamPage"; 


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/team" element={<TeamPage/>}/>
        </Routes>
    </Router>
  </>
    );
}

export default App;
