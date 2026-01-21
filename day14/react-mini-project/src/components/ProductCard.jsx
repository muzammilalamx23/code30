function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img 
      src={product.image}
      alt={product.title}
      className="product-img" 
      />
      <p><strong>Title:</strong> {product.title}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>

    </div>
  );
}

export default ProductCard;
