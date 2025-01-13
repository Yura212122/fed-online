import React, { createContext, useContext, useState } from 'react';

 
const CartContext = createContext();

 
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

 
const useCart = () => {
  return useContext(CartContext);
};

 
const Product = ({ id, name }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name });
  };

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={handleAddToCart}>Додати до корзини</button>
    </div>
  );
};

 
const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Корзина</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Корзина порожня</p>
      )}
    </div>
  );
};

 
const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Магазин</h1>
        <Product id={1} name="Товар 1" />
        <Product id={2} name="Товар 2" />
        <Product id={3} name="Товар 3" />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
