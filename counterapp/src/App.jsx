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
import Params from './components/Params';
import Singleproduct from './components/Singleproduct';
import Map from './components/Map';
import Wrapper from './components/Wrapper';
import { useState } from 'react';
import DeclarativeWay from './components/DeclarativeWay';
import Stylecompo from './components/Stylecompo';
import Params2 from './components/Params2';
import SinglePage from './components/SinglePage';
import DynamicStyles from './components/DynamicStyles';
import DynamicClasses from './components/DynamicClasses';
import ChildrenProp from './components/ChildrenProp';
import Formone from './components/Formone';
import FormSingleState from './components/FormSingleState';
import UseCallback from './components/UseCallback';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import ProductsFromBackend from './components/ProductsFromBackend';
import Product from './components/Product';
import Register from './components/Register';
import Cart from './components/Cart';
import Profile from './components/Profile';


function App() {

  const [myUsers, setMyUsers] = useState(["Rahul", "Nand", "hsabjxha"])

  return (
    <div>

      <Navbar />
      <Routes>
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route exact path='/product-from-backend' element= {<ProductsFromBackend />} />
        <Route exact path='/use-reducer' element={ <UseReducer />} />
        <Route exact path='/use-memo' element={ <UseMemo />} />
        <Route exact path='/use-callback' element={<UseCallback />} />
        <Route exact path='/form-single-state' element={ <FormSingleState />} />
        <Route exact path='/form-one' element={ <Formone /> } />
        <Route exact path='/children-prop' element={ <ChildrenProp />} />
        <Route exact path='/dynamic-classes' element={ <DynamicClasses />} />
        <Route exact path='/dynamic-style' element={ <DynamicStyles />} /> 
        <Route exact path='/single-page/:id' element={ <SinglePage />} />
        <Route exact path='/params2' element={ <Params2 />} />
        <Route exact path='/style-compo' element={ <Stylecompo />} />
        <Route exact path='/declative-way' element={ <DeclarativeWay />} />
        <Route exact path='/wrapper' element={ <Wrapper />} />
        <Route exact path='/map' element={<Map myUsers= {myUsers} setMyUsers= {setMyUsers} myName= {"Navnath"} kuchBhi= {["Naval"]} />} />
        <Route exact path='/single-product/:naval' element={ <Singleproduct/> } />
        <Route exact path='/params' element={ <Params />} />
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

      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
