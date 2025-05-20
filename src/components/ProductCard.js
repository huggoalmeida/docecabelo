import { Link } from 'react-router-dom';

      function ProductCard({ product }) {
        return (
          <Link to={`/product/${product.id}`} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.length} - {product.color}</p>
              <p className="text-pink-600 font-bold">{product.price}</p>
            </div>
          </Link>
        );
      }

      export default ProductCard;