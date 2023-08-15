import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Chat from './components/Chat'

function App() {
  return (
   <>
   <BrowserRouter>  
   <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
