import { useParams } from "react-router-dom";
import { products } from "./products";

function ProductDetails(){

  const {id} = useParams();
  const product = products.find((product)=> product.id === Number(id));

  if(!product){
    return <p>Product not found.</p>
  }
  return(
    <div>
      <p>Name: {product?.name}</p>
      <p>Price: ${product?.price}</p>
      <p>Description: {product?.description}</p>
    </div>
  )
}
export default ProductDetails;