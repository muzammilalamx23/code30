import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./Dashboard.css";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch Products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (

    <div className="dashboard">
      <h2>Product Dashboard</h2>
      <div className="product-grid">
        {products.map((product) => (
          <UserCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
