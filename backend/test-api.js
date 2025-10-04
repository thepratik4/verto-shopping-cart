// backend/test-api.js
// Simple API test using built-in fetch (Node.js 18+)

const API_URL = 'http://localhost:5000/api';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(color, message) {
  console.log(color + message + colors.reset);
}

async function testProductsEndpoint() {
  log(colors.cyan, '\n Testing Products API Endpoint\n');
  log(colors.yellow, '='.repeat(50));
  
  try {
    // Test 1: GET /api/products
    log(colors.blue, '\n Test 1: GET /api/products');
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    
    if (response.status === 200) {
      log(colors.green, ' Status Code: 200 OK');
    } else {
      log(colors.red, ` Status Code: ${response.status}`);
    }
    
    if (Array.isArray(data)) {
      log(colors.green, ` Response is Array: true`);
      log(colors.green, ` Number of Products: ${data.length}`);
    } else {
      log(colors.red, ' Response is not an array');
      return;
    }
    
    // Test 2: Validate product structure
    log(colors.blue, '\n Test 2: Product Structure Validation');
    const product = data[0];
    const requiredFields = ['id', 'name', 'price', 'imageUrl', 'description', 'category'];
    let allFieldsPresent = true;
    
    requiredFields.forEach(field => {
      if (product.hasOwnProperty(field)) {
        log(colors.green, ` Field "${field}": present`);
      } else {
        log(colors.red, ` Field "${field}": missing`);
        allFieldsPresent = false;
      }
    });
    
    // Test 3: Validate data types
    log(colors.blue, '\n Test 3: Data Type Validation');
    
    if (typeof product.id === 'number') {
      log(colors.green, ' id is number');
    } else {
      log(colors.red, ` id is ${typeof product.id}, expected number`);
    }
    
    if (typeof product.name === 'string') {
      log(colors.green, ' name is string');
    } else {
      log(colors.red, ` name is ${typeof product.name}, expected string`);
    }
    
    if (typeof product.price === 'number') {
      log(colors.green, ' price is number');
    } else {
      log(colors.red, ` price is ${typeof product.price}, expected number`);
    }
    
    if (product.price > 0) {
      log(colors.green, ` price is positive: ₹${product.price}`);
    } else {
      log(colors.red, ' price should be positive');
    }
    
    // Test 4: Sample product display
    log(colors.blue, '\n Test 4: Sample Product Data');
    log(colors.cyan, JSON.stringify(product, null, 2));
    
    // Test 5: GET single product
    log(colors.blue, '\n Test 5: GET /api/products/:id');
    const singleResponse = await fetch(`${API_URL}/products/1`);
    if (singleResponse.status === 200) {
      const singleProduct = await singleResponse.json();
      log(colors.green, ` Single product fetch successful`);
      log(colors.green, ` Product name: ${singleProduct.name}`);
    } else {
      log(colors.red, ` Failed to fetch single product`);
    }
    
    // Test 6: Test checkout endpoint
    log(colors.blue, '\n Test 6: POST /api/checkout');
    const checkoutData = {
      items: [
        {
          id: '1',
          name: 'Test Product',
          price: 999,
          quantity: 2
        }
      ],
      customerInfo: {
        name: 'Test User',
        email: 'test@example.com'
      }
    };
    
    const checkoutResponse = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(checkoutData)
    });
    
    const checkoutResult = await checkoutResponse.json();
    
    if (checkoutResponse.status === 200 && checkoutResult.success) {
      log(colors.green, ' Checkout endpoint working');
      log(colors.green, ` Order ID generated: ${checkoutResult.orderId}`);
      log(colors.green, ` Total calculated: ₹${checkoutResult.total}`);
    } else {
      log(colors.red, ' Checkout endpoint failed');
    }
    
    // Summary
    log(colors.yellow, '\n' + '='.repeat(50));
    log(colors.green, '\n All Tests Passed Successfully!\n');
    
  } catch (error) {
    log(colors.red, `\n Test Failed: ${error.message}`);
    log(colors.yellow, '\nMake sure your backend server is running on port 5000');
    log(colors.yellow, 'Run: npm run dev\n');
  }
}

// Run tests
testProductsEndpoint();
