document.addEventListener("DOMContentLoaded", function () {
  const mainNav = document.getElementById("main-nav");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  const menuToggle = document.getElementById('menu-toggle');

  // Set the content's margin-left initially
  content.style.marginLeft = `${sidebar.offsetWidth}px`;

  // Load the default content (home page)
  loadPage("home");

  // Add a click event listener to the navigation menu
  mainNav.addEventListener("click", handleNavClick);

  // Add event listeners to each anchor tag inside the sidebar
  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });

  // Add a click event listener to the menu toggle button
  menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
  });

  // Add an event listener to the body to close the menu when clicking outside the sidebar
  document.body.addEventListener('click', function (event) {
    // Check if the clicked element is inside the sidebar or the menu toggle button
    if (!sidebar.contains(event.target) && event.target !== menuToggle) {
      sidebar.classList.remove('open');
    }
  });

  function handleNavClick(event) {
    event.preventDefault();
    const target = event.target;
    if (target.tagName === "A") {
      const page = target.getAttribute("data-page");
      loadPage(page);
    }
  }
});


  
  function loadPage(page, callback) {
    if (["laundry", "paper", "household", "oral", "personal", "medicine", "feminine", "baby", "skincare", "bundles"].includes(page)) {
      displayProducts(page);
    } else if (page === "cart") {
      displayCart();
    } else {
      // Fetch the content of the corresponding page
      fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
          content.innerHTML = html;
  
          if (callback) {
            callback();
          }
        })
        .catch(error => {
          console.error(`Error loading page: ${page}`, error);
        });
    }
  }
  
  function displayProducts(section) {
    const products = getProductsForSection(section);
    const productsContainer = document.createElement("div");
    productsContainer.id = "products";
  
    products.forEach(product => {
      const productElement = createProductElement(product);
      productsContainer.appendChild(productElement);
    });
  
    content.innerHTML = ""; // Clear the content before appending the products container
    content.appendChild(productsContainer);
  }
  
  function getProductsForSection(section) {
    return products.filter((product) => product.category === section);
  }
  
  function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
  
    const productImage = document.createElement("img");
    productImage.src = `images/${product.image}`;
    productImage.alt = product.name;
  
    const productName = document.createElement("h3");
    productName.textContent = product.name;
  
    const productPrice = document.createElement("p");
    const priceList = product.sizes.map(
      (size) => `${size.size} - $${size.price.toFixed(2)}`
    );
    productPrice.textContent = priceList.join(", ");
  
    const sizeSelect = document.createElement("select");
    product.sizes.forEach((size) => {
      const option = document.createElement("option");
      option.value = size.size;
      option.textContent = `${size.size} - $${size.price.toFixed(2)}`;
      sizeSelect.appendChild(option);
    });
  
    // Add a quantity input element
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "1";
    quantityInput.value = "1";
    quantityInput.style.width = "50px";
  
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
  
    addToCartButton.addEventListener("click", () => {
      const selectedSize = sizeSelect.value;
      const selectedQuantity = parseInt(quantityInput.value);
      addToCart(product.id, selectedSize, selectedQuantity);
  
      // Display an alert when the item is added to the cart
      alert(`${product.name} (${selectedSize}) has been added to the cart.`);
    });
  
    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(sizeSelect);
    productDiv.appendChild(quantityInput);
    productDiv.appendChild(addToCartButton);
  
    return productDiv;
  }
  
  
  
  document.getElementById("cart-link").addEventListener("click", function (event) {
    event.preventDefault();
    displayCart();
  });
  
  function displayCart() {
    console.log("Displaying cart: ", cart);
    const cartItems = cart.getItems(); // Get the cart items
    console.log("Cart items: ", cartItems);
    const cartHtml = generateCartHtml(cartItems);
    content.innerHTML = cartHtml;
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
    console.log("Cart items: ", cartItems);

    cartItems.forEach(item => {
        const total = item.product.sizes.find(s => s.size === item.size).price * item.quantity;
        cartHtml += `
            <tr>
                <td>${item.product.name}</td>
                <td>${item.size}</td>
                <td>$${item.product.sizes.find(s => s.size === item.size).price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${total.toFixed(2)}</td>
            </tr>
        `;
    });

    cartHtml += `
            </tbody>
        </table>
    `;

    return cartHtml;
}

  document.addEventListener("DOMContentLoaded", function () {
    removeInlineMarginLeft();
  
    function removeInlineMarginLeft() {
        const content = document.getElementById("content");
        content.style.marginLeft = "";
    }
  });

  
  
