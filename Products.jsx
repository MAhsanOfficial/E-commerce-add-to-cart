import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import Card from '../Components/Card';
import { Card } from 'react-bootstrap';
// import { CartContext } from '../Contexts/CartContext';
import { CartContext } from './CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className='main-banner'>
        <div className='flat-discount'>
          <div>
            <h1>Flat 50% off</h1>
            <h3><span>12</span> Hours <span>20</span> Minutes</h3>
          </div>
          <div className='image-women'></div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            image={product.image}
            description={product.category}
            price={product.price}
          >
            <Link to={`/product/${product.id}`}>View Details</Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
