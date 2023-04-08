import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
//import Checkout from './Checkout';
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
    {/* < Home />
    <Router>
      <Routes>
      <Route path="/" element={<Home /> }/>
      //<Route path="/checkout" element={<Checkout />}/>
      <Route path='/login' element={<h1>hello </h1>}/>
      <Route path='*' element={<h1>Page not found!</h1>}/>
      </Routes>
    </Router> */}
    < Header />
    < Home />
    <Footer />

  
    </div>
  );
}

export default App;


//import { {AiFillFacebook} } from "react-icons/ai"; //for facebook icon
//import  { AiFillGithub }  from "react-icons/ai"; //for Github  icon
//import  { AiFillLinkedin }  from "react-icons/ai"; //for Linkedin  icon
