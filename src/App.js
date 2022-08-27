import {Route,Routes} from 'react-router-dom'
import './App.css';
import { GymPoster } from './components/GymPoster/GymPoster';
import { GymType } from './components/GymType/GymType';
import LoginModal from './components/loginModal/LoginModal';
import { Navbar } from './components/navbar/Navbar';
import { Sidebar } from './components/sidebar/Sidebar';
import { GymHomePage } from './pages/gymPage/GymHomePage';
import { PlanPage } from './pages/planPage/PlanPage';

function App() {
  return (
    <div className="App">
     
      <Routes>
       <Route path="/" element={<GymHomePage/>}></Route> 
       <Route path="/planPage" element={<PlanPage/>}></Route> 

    
    </Routes>

    </div>
  );
}

export default App;
