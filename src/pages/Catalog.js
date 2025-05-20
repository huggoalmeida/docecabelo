import { useState, useEffect } from 'react';
      import ProductCard from '../components/ProductCard';

      function Catalog() {
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

        return (
          <section id="catalog" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-center mb-8">Catálogo de Produtos</h2>
              {products.length === 0 ? (
                <p className="text-center">Nenhum produto disponível.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      }

      export default Catalog;