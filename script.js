let cart = [];

function addToCart(name, price) {
  // Добавляем товар в корзину
  cart.push({ name, price });

  // Обновляем содержимое корзины
  updateCart();
}

function updateCart() {
  // Обновление отображения корзины
  const cartContent = document.getElementById('cartContent');
  if (cart.length === 0) {
    cartContent.innerHTML = 'Корзина пуста.';
  } else {
    cartContent.innerHTML = '';
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${item.name} - ${item.price} ₽</span>
        <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
      `;
      cartContent.appendChild(cartItem);
    });
  }
}

function removeFromCart(index) {
  // Удаление товара из корзины
  cart.splice(index, 1);

  // Обновляем содержимое корзины
  updateCart();
}

function toggleCart() {
  // Переключаем видимость корзины
  document.getElementById('cartSidebar').classList.toggle('open');
}

function openOrderModal() {
  // Открытие модального окна для оформления заказа
  const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
  orderModal.show();
}

function submitOrder(event) {
  event.preventDefault();
  alert('Заказ отправлен!');
}
