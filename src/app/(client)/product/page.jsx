import React from 'react';
import ProductList from '../../../components/product/ProductList';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
