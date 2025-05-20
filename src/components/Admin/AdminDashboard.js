import { useState } from 'react';
      import ProductForm from './ProductForm';

      function AdminDashboard({ products, setProducts }) {
        const [editingProduct, setEditingProduct] = useState(null);

        const handleDelete = (id) => {
          setProducts(products.filter((product) => product.id !== id));
        };

        return (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-semibold text-center mb-8">Gerenciar Produtos</h2>
            <ProductForm products={products} setProducts={setProducts} editingProduct={editingProduct} setEditingProduct={setEditingProduct} />
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Lista de Produtos</h3>
              {products.length === 0 ? (
                <p className="text-center">Nenhum produto cadastrado.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                      <h4 className="text-lg font-semibold">{product.name}</h4>
                      <p>{product.price}</p>
                      <div className="mt-4 flex space-x-4">
                        <button
                          onClick={() => setEditingProduct(product)}
                          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      }

      export default AdminDashboard;