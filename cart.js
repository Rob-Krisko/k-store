const cart = {
    items: {},
    getItems() {
        return Object.values(this.items);
    },
};

function addToCart(productId, size, quantity) {
    console.log("addToCart triggered:", productId, size, quantity);
    const cartKey = `${productId}_${size}`;
    if (cart.items[cartKey]) {
        cart.items[cartKey].quantity += quantity;
    } else {
        const product = products.find((p) => p.id === productId);
        cart.items[cartKey] = {
            product: product,
            size: size,
            quantity: quantity,
        };
    }
    console.log("Cart contents:", cart);
    localStorage.setItem('cart', JSON.stringify(cart.items));
}


function generateCartHtml() {
    console.log("Cart contents: ", cart);
    let cartHtml = `
      <h2>Shopping Cart</h2>
      <table class="cart-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Size</th>
            <th>Price per</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    const cartItems = cart.getItems();
    let index = 0;
    let completeTotal = 0;
  
    for (const cartItem of cartItems) {
        const rowTotal = cartItem.product.sizes.find(s => s.size === cartItem.size).price * cartItem.quantity;
        completeTotal += rowTotal;
        cartHtml += `
            <tr class="${index % 2 === 0 ? "even" : "odd"}">
                <td>${cartItem.product.name}</td>
                <td>${cartItem.size}</td>
                <td>$${cartItem.product.sizes.find(s => s.size === cartItem.size).price.toFixed(2)}</td>
                <td>${cartItem.quantity}</td>
                <td>$${rowTotal.toFixed(2)}</td>
            </tr>
        `;
        index++;
    }
    
  
    cartHtml += `
        </tbody>
        <tfoot>
          <tr>
            <th colspan="4">Complete Total</th>
            <th>$${completeTotal.toFixed(2)}</th>
          </tr>
        </tfoot>
      </table>
      <button onclick="sendCartEmail()">Send Cart as Email</button>
    `;
  
    return cartHtml;
  }

  function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart.items = JSON.parse(storedCart);
    }
}

// Call the loadCart function when the script is loaded
loadCart();

function generateEmailBody() {
    const cartItems = cart.getItems();
    let emailBody = 'Item Name\tSize\tPrice per\tQuantity\tTotal\n';
  
    for (const cartItem of cartItems) {
      const rowTotal = cartItem.product.sizes.find(s => s.size === cartItem.size).price * cartItem.quantity;
      emailBody += `${cartItem.product.name}\t${cartItem.size}\t$${cartItem.product.price.toFixed(2)}\t${cartItem.quantity}\t$${rowTotal.toFixed(2)}\n`;
    }
  
    return emailBody;
  }

  function sendCartEmail() {
    const recipientEmail = "kriskora17@gmail.com"; // Replace this with the desired email address
    const subject = "K-Shop Order";
    const body = encodeURIComponent(generateCartHtml());
    window.open(`mailto:${recipientEmail}?subject=${subject}&body=${body}`, '_blank');
  }
  
  
