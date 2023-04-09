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
  localStorage.setItem("cart", JSON.stringify(cart.items));
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
    const rowTotal = cartItem.product.sizes.find((s) => s.size === cartItem.size).price * cartItem.quantity;
    completeTotal += rowTotal;
    cartHtml += `
      <tr class="${index % 2 === 0 ? "even" : "odd"}">
          <td>${cartItem.product.name}</td>
          <td>${cartItem.size}</td>
          <td>$${cartItem.product.sizes.find((s) => s.size === cartItem.size).price.toFixed(2)}</td>
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
    <label for="customer-name">Your Name:</label>
    <input type="text" id="customer-name" name="customer-name" required>
    <button id="send-cart-email">Send Cart as Email</button>
  `;

  return cartHtml;
}

function loadCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart.items = JSON.parse(storedCart);
  }
}

loadCart();

function generateEmailBody() {
  const cartItems = cart.getItems();
  let emailBody = "";
  let totalCost = 0;

  for (const cartItem of cartItems) {
    const rowTotal = cartItem.product.sizes.find((s) => s.size === cartItem.size).price * cartItem.quantity;
    totalCost += rowTotal;
    emailBody += `${cartItem.quantity} ${cartItem.product.name}: ${cartItem.size}\n`;
  }

  emailBody += `\nTotal Cost: $${totalCost.toFixed(2)}`;
  return emailBody;
}



function sendCartEmail() {
  const recipientEmail = "kriskora17@gmail.com"; // Replace this with the desired email address
  const subject = "K-Shop Order";
  const body = generateEmailBody();
  const customerName = document.getElementById("customer-name").value;

  // Set up the email template parameters
  const templateParams = {
    to_email: recipientEmail,
    subject: subject,
    body: body,
    name: customerName, // Add the name to the template parameters
  };

  // Send the email using EmailJS
  emailjs
    .send('service_2tkgwa8', 'template_ff8trfc', templateParams) // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual service and template IDs from EmailJS
    .then(
      (response) => {
        console.log('Email sent successfully:', response);
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
}

// Assuming your cart HTML container has the id "cart-container"
function displayCart() {
  const cartContainer = document.getElementById("content");
  cartContainer.innerHTML = generateCartHtml();

  // Add an event listener to the dynamically created button
  const sendCartEmailButton = document.getElementById("send-cart-email");
  if (sendCartEmailButton) {
    sendCartEmailButton.addEventListener("click", sendCartEmail);
  }
}

