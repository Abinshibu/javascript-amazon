export const cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1
    }
];

export function addToCart(productId) {
    let matchingItem;

      cart.forEach((item) => {
          if (item.productId === productId) {
              matchingItem = item;
          }
      });
      const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
      );
      const quantity = quantitySelector ? Number(quantitySelector.querySelector('select').value) : 1;

      const addedMessage = document.querySelector(
    `.js-added-to-cart-${productId}`
      );
      if (addedMessage) {
          addedMessage.classList.add('added-to-cart-visible');

          setTimeout(() => {
              addedMessage.classList.remove('added-to-cart-visible');
          }, 2000);
      }

      if (matchingItem) {
          matchingItem.quantity += quantity;
      } else {
          cart.push({
              productId,
              quantity
          });
      }
}