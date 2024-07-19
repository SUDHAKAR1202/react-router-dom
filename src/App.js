import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/about';
import Users from './components/users';
import Navbar from './components/navbar';
import NotFound from './components/notfound';
import Login from './components/login';
import Signup from './components/signup';


  function App() {
    return (
      
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element ={<AboutUs />} />
        <Route path="/users" element={<Users />} />
        
       </Route>
       <Route  path="/login" element={<Login />}/>
       <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />}/>
      </Routes>
     
      
    );
  }



export default App;
