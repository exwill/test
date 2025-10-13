import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';

export default function App() { return ( <div className="min-h-screen bg-gray-50 text-gray-900"> <Navbar /> <main className="max-w-6xl mx-auto px-4 py-8"> <Routes> <Route path="/" element={<Home />} /> <Route path="/registration" element={<Registration />} /> </Routes> </main> </div> ); }
