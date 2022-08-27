import {Route,Routes} from 'react-router-dom'
import './App.css';
import { GymPoster } from './components/GymPoster/GymPoster';
import { GymType } from './components/GymType/GymType';
import LoginModal from './components/loginModal/LoginModal';
import { Navbar } from './components/navbar/Navbar';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GymPoster/>
      <LoginModal/>
      {/* <Sidebar/> */}
      <GymType/>
      <Routes>
      {/* <Route path="/" element={<Login/>}></Route> 
      <Route path="/login2" element={<Login2/>}></Route> 
      <Route path="/register" element={<Register/>}></Route> 
      <Route path="/knowledgeBase" element={<KnowledgeBase/>}></Route> 

      <Route path="/dashboard" element={<Dashboard/>}></Route>  */}
    </Routes>

    </div>
  );
}

export default App;
