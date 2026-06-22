import { useParams } from "react-router-dom";
import { products } from "./products";

function ProductDetails(){

  const {id} = useParams();
  const product = products.find((product)=> product.id === Number(id));

  if(!product){
    return <p>Product not found.</p>
  }
  return(
    <div className="card">
      <h2>{product?.name}</h2>
      <p className="price">${product?.price}</p>
      <p className="muted">{product?.description}</p>
    </div>
  )
}
export default ProductDetails;