export const addItemToCart = (cartItems, cartAddItem) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartAddItem.id
    );
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartAddItem.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartAddItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartAddItem) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartAddItem.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartAddItem.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartAddItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem)
};