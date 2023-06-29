import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Counter from './components/Counter';
import Section from './components/Section';
import TypeUseEffect from './components/TypeUseEffect';
import TypeUseEffect2 from './components/TypeUseEffect2';
import TypeUseEffect3 from './components/TypeUseEffect3';
import TypeUseEffect4 from './components/TypeUseEffect4';


function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route exact path='/type-4' element={ <TypeUseEffect4 />} />
        <Route exact path='/type-3' element={ <TypeUseEffect3 />} />
        <Route exact path='/type-2' element={ <TypeUseEffect2/>} />
        <Route exact path='/type-1' element={ <TypeUseEffect/>} />
        <Route exact path='/changeSection' element={ <Section />}/>
        <Route exact path='/counter' element={ <Counter />}/>
        <Route exact path='/' element= { <Home /> }/>
        <Route exact path="/welcome" element= { <Welcome/> }/>
        <Route exact path='/login' element={ <Login /> } />
      </Routes>

      
      <Footer/>
    </div>
  );
}

export default App;
