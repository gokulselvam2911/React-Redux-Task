import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchProducts } from '../features/cartSlice';
import { FaPlusCircle } from 'react-icons/fa';

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  ₹{Number(product.price).toFixed(2)} {/* Ensure price is a number */}
                </p>
                <p className="card-text">{product.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart <FaPlusCircle />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
