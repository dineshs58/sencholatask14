import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Componets/Home';
import {Routes,Route} from 'react-router-dom';





function App() {
  return (
  
    <>
    {/* <Home/> */}
    <Routes>

      <Route  exact path='/' element={<Home/>}></Route>
      <Route  exact path='/register' element={<Register/>}></Route>
      <Route  exact path='/login' element={<Login/>}></Route>

    </Routes>

    
    
    

    </>
  );
}

export default App;
