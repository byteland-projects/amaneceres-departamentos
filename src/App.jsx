import './App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Navbar from '/src/components/NavBar.jsx';
import Footer from "/src/components/Footer.jsx";
import WhatsAppButton from './components/WhatsappButton';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App
