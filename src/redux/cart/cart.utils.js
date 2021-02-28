const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id ? { ...item, quantity: cartItemToAdd.quantity } : item
    );
  }
  return [...cartItems, cartItemToAdd];
};

export default addItemToCart;
