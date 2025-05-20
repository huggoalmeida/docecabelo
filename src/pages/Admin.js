import { useState, useEffect } from 'react';
      import AdminLogin from '../components/Admin/AdminLogin';
      import AdminDashboard from '../components/Admin/AdminDashboard';

      function Admin() {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [products, setProducts] = useState([]);
        const [error, setError] = useState(null);

        useEffect(() => {
          fetch('/products.json')
            .then((response) => {
              if (!response.ok) throw new Error('Erro ao carregar produtos');
              return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => {
              console.error('Erro:', error);
              setError('Não foi possível carregar os produtos. Verifique se o arquivo products.json está na pasta public.');
            });
        }, []);

        if (error) return <div className="text-center py-16 text-red-600">{error}</div>;
        if (!isAuthenticated) return <AdminLogin setIsAuthenticated={setIsAuthenticated} />;

        return <AdminDashboard products={products} setProducts={setProducts} />;
      }

      export default Admin;