import { useState, useEffect } from 'react';

      function ProductForm({ products, setProducts, editingProduct, setEditingProduct }) {
        const [formData, setFormData] = useState({
          name: '',
          description: '',
          length: '',
          color: '',
          price: '',
          image: ''
        });

        useEffect(() => {
          if (editingProduct) {
            setFormData(editingProduct);
          } else {
            setFormData({ name: '', description: '', length: '', color: '', price: '', image: '' });
          }
        }, [editingProduct]);

        const handleSubmit = (e) => {
          e.preventDefault();
          if (!formData.name || !formData.price) {
            alert('Nome e preço são obrigatórios!');
            return;
          }

          if (editingProduct) {
            setProducts(
              products.map((product) =>
                product.id === editingProduct.id ? { ...formData, id: editingProduct.id } : product
              )
            );
            setEditingProduct(null);
          } else {
            const newProduct = { ...formData, id: products.length + 1 };
            setProducts([...products, newProduct]);
          }

          setFormData({ name: '', description: '', length: '', color: '', price: '', image: '' });
        };

        return (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{editingProduct ? 'Editar Produto' : 'Adicionar Produto'}</h3>
            <input
              type="text"
              placeholder="Nome do Produto"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Descrição"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Tamanho (em cm)"
              value={formData.length}
              onChange={(e) => setFormData({ ...formData, length: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Cor"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Preço"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="URL da Imagem"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
              {editingProduct ? 'Salvar Alterações' : 'Adicionar Produto'}
            </button>
            {editingProduct && (
              <button
                type="button"
                onClick={() => {
                  setEditingProduct(null);
                  setFormData({ name: '', description: '', length: '', color: '', price: '', image: '' });
                }}
                className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 mt-2"
              >
                Cancelar
              </button>
            )}
          </form>
        );
      }

      export default ProductForm;