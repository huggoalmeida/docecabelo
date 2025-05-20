import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
     import Navbar from './components/Navbar';
     import Footer from './components/Footer';
     import Home from './pages/Home';
     import Catalog from './pages/Catalog';
     import Product from './pages/Product';
     import About from './pages/About';
     import Contact from './pages/Contact';
     import Admin from './pages/Admin';
     import './index.css';

     function App() {
       return (
         <Router>
           <div className="flex flex-col min-h-screen">
             <Navbar />
             <main className="flex-grow">
               <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/catalog" element={<Catalog />} />
                 <Route path="/product/:id" element={<Product />} />
                 <Route path="/about" element={<About />} />
                 <Route path="/contact" element={<Contact />} />
                 <Route path="/admin" element={<Admin />} />
                 <Route path="*" element={<div className="text-center py-16">Página não encontrada</div>} />
               </Routes>
             </main>
             <Footer />
           </div>
         </Router>
       );
     }

     export default App;