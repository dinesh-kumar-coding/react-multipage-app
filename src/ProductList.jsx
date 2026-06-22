import { Link } from "react-router-dom";
import { products } from "./products";

function ProductList() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                {product.name} - ${product.price}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
