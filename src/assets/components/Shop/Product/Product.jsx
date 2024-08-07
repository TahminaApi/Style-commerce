import React, { useEffect, useState } from 'react';
import load from '../../../../assets/img/lg.gif';

const Product = ({ handelAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('product.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-9">
      {products.map((product) => (
        <div key={product.id} className="card bg-red-700 w-96 shadow-xl">
          <div className="h-[70%]">
            <img src={product.img ? product.img : load} alt={product.name} />
          </div>

          <div className="card-body text-amber-400">
            <h2 className="card-title">Name: {product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Seller: {product.seller}</p>

            <div className="">
              <button
                onClick={() => handelAddToCart(product)}
                className="btn btn-outline w-full text-amber-400"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
