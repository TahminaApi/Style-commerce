import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import { Helmet } from 'react-helmet';

const Shop = () => {
  const [cart, setcart] = useState([]);

  // Click bye now Button ----

  const handelAddToCart = (selectedProduct) => {
    let newCart = [];

    const exists = cart.find((product) => product.id === selectedProduct.id);
    // console.log(exists);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      // console.log(rest);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setcart(newCart);
  };
  // console.log(cart);
  // console.log("Handle add to cart", cpr);
  // console.log(newCart);
  // console.log(selectedProduct);

  const handleClearCart = () => {
    setcart('');
  };

  // For scroll--------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto pt-5">
      <Helmet>
        <meta
          charSet="utf-8 "
          content="Shop page,E-commerce project ,bd shop page,best shop page,Style-Commerce page"
        />
        <title>Style-commerce || shop</title>
      </Helmet>

      <h1 className="text-4xl  pb-10 text-amber-400">This is the Shop page</h1>

      <div className="flex justify-between">
        {/* Product div is here */}

        <div className="w-11/14 me-2 ">
          <Product handelAddToCart={handelAddToCart}></Product>
        </div>

        {/* cart div is here */}

        <div className="cart w-2/12 ms-5">
          <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
