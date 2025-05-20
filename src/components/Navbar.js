import { Link } from 'react-router-dom';

      function Navbar() {
        return (
          <nav className="bg-pink-200 py-4 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-pink-800">Doce Cabelos</h1>
              <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-pink-600">Início</Link></li>
                <li><Link to="/catalog" className="hover:text-pink-600">Catálogo</Link></li>
                <li><Link to="/about" className="hover:text-pink-600">Sobre</Link></li>
                <li><Link to="/contact" className="hover:text-pink-600">Contato</Link></li>
                <li><Link to="/admin" className="hover:text-pink-600">Admin</Link></li>
              </ul>
            </div>
          </nav>
        );
      }

      export default Navbar;