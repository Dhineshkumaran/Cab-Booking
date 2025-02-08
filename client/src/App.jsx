import './index.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import SignUp from './components/Signup';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 1. Home Page 🏠
// 2. Sign-Up Page 📝
// 3. Contact Page 📞