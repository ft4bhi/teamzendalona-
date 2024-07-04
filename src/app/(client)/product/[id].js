import { useRouter } from 'next/router';
import products from '../../components/products.json';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.productImage} alt={product.title} className="w-full h-auto" />
      <p>{product.description}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetail;
