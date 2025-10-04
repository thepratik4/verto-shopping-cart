
ModernShop - Full Stack E-Commerce Application

please go through this video if you want to skip reading the doc 

https://drive.google.com/file/d/1TxIMClrrKL_lHo3046c6HQLdiiP4mO6Y/view?usp=sharing 

the above link has everything mentioned on how to start the project locally. Thanks

A modern, feature-rich e-commerce platform built with React, TypeScript, Node.js, and Express. This project demonstrates a complete shopping experience with customer-facing features and an admin panel for product management.

Check your versions:
```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/modernshop.git or just download folder from github
cd modernshop
```

### Step 2: Install Backend Dependencies
```bash

cd backend
npm install
```

### Step 3: Install Frontend Dependencies

```bash

cd ../frontend
npm install
```

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express 4.18.2** - Web framework
- **CORS** - Cross-origin resource sharing
- **JSON File Storage** - Simple database solution

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for cloning the repository)

**Frontend Dependencies:**
- react & react-dom - UI library
- typescript - Type checking
- vite - Build tool
- tailwindcss - Styling
- lucide-react - Icons

---

## 🏃 Running the Application

You need to run both backend and frontend servers simultaneously.

### Option 1: Using Two Terminals (Recommended)

#### Terminal 1 - Backend Server

```bash
cd backend
npm run dev
```

✅ Backend will start on: **http://localhost:5000**

You should see:
```
Backend running on http://localhost:5000
```

#### Terminal 2 - Frontend Server

```bash
cd frontend
npm run dev
```

✅ Frontend will start on: **http://localhost:5173**

You should see:
```
  VITE v5.4.2  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Option 2: Using VS Code Split Terminal

1. Open VS Code
2. Open integrated terminal (Ctrl + `)
3. Split terminal (Click the split icon or Ctrl + Shift + 5)
4. Run backend in first terminal
5. Run frontend in second terminal

---

           ## ✨ Features

### Customer Features
- 🛒 **Shopping Cart** - Add, remove, and update product quantities
- 💾 **Cart Persistence** - Cart data saved in localStorage
- 🔄 **Real-time Updates** - Instant cart total and item count updates
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Checkout System** - Complete order placement with confirmation
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations

### Admin Features
- 🔐 **Secure Authentication** - Password-protected admin panel
- ➕ **Add Products** - Create new products with all details
- ✏️ **Edit Products** - Update existing product information
- 🗑️ **Delete Products** - Remove products from catalog
- 📊 **Product Management** - View all products in organized table
- ⚡ **Real-time Sync** - Changes reflect immediately across the app

---

## 📂 Project Structure

```
modernshop/
│
├── backend/                    # Backend Node.js application
│   ├── data/
│   │   └── data.json          # Product database (JSON file)
│   ├── routes/
│   │   ├── products.js        # Product CRUD operations
│   │   └── checkout.js        # Order processing
│   ├── server.js              # Express server entry point
│   └── package.json           # Backend dependencies
│
├── frontend/                   # Frontend React application
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Header.tsx            # Navigation header
│   │   │   ├── ProductGrid.tsx       # Product listing
│   │   │   ├── ProductCard.tsx       # Individual product
│   │   │   ├── CartSidebar.tsx       # Shopping cart
│   │   │   ├── AdminPanel.tsx        # Admin dashboard
│   │   │   ├── AdminLogin.tsx        # Admin authentication
│   │   │   └── ProductForm.tsx       # Add/Edit product form
│   │   │
│   │   ├── context/           # State management
│   │   │   ├── CartContext.tsx       # Shopping cart state
│   │   │   └── AdminContext.tsx      # Admin auth state
│   │   │
│   │   ├── services/          # API integration
│   │   │   └── api.ts                # API service layer
│   │   │
│   │   ├── types/             # TypeScript definitions
│   │   │   └── product.ts            # Product interfaces
│   │   │
│   │   ├── App.tsx            # Root component
│   │   ├── main.tsx           # Application entry point
│   │   └── index.css          # Global styles
│   │
│   ├── index.html             # HTML template
│   ├── package.json           # Frontend dependencies
│   ├── tsconfig.json          # TypeScript configuration
│   ├── tailwind.config.js     # Tailwind configuration
│   └── vite.config.ts         # Vite configuration
│
└── README.md                   # Project documentation
```

---

## 🔌 API Documentation

Base URL: `http://localhost:5000/api`

### Product Endpoints

#### Get All Products
```http
GET /api/products
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Samsung Galaxy S24 Ultra",
    "price": 1299,
    "description": "Flagship smartphone with S Pen",
    "imageUrl": "https://example.com/image.jpg",
    "category": "Mobile",
    "brand": "Samsung"
  }
]
```

#### Get Single Product
```http
GET /api/products/:id
```

#### Create Product
```http
POST /api/products
Content-Type: application/json

{
  "name": "Product Name",
  "price": 999,
  "description": "Product description",
  "imageUrl": "https://example.com/image.jpg",
  "category": "Mobile",
  "brand": "Brand Name"
}
```

#### Update Product
```http
PUT /api/products/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "price": 899
}
```

#### Delete Product
```http
DELETE /api/products/:id
```

### Checkout Endpoints

#### Place Order
```http
POST /api/checkout
Content-Type: application/json

{
  "items": [
    {
      "id": "1",
      "name": "Product Name",
      "price": 999,
      "quantity": 2
    }
  ],
  "customerInfo": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order placed successfully",
  "orderId": "ORD-1234567890",
  "total": 1998
}
```

#### Get Order Details
```http
GET /api/checkout/:orderId
```

### Health Check
```http
GET /api/health
```

---
## ✨ Features

### Customer Features
- 🛒 **Shopping Cart** - Add, remove, and update product quantities
- 💾 **Cart Persistence** - Cart data saved in localStorage
- 🔄 **Real-time Updates** - Instant cart total and item count updates
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Checkout System** - Complete order placement with confirmation
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations

### Admin Features
- 🔐 **Secure Authentication** - Password-protected admin panel
- ➕ **Add Products** - Create new products with all details
- ✏️ **Edit Products** - Update existing product information
- 🗑️ **Delete Products** - Remove products from catalog
- 📊 **Product Management** - View all products in organized table
- ⚡ **Real-time Sync** - Changes reflect immediately across the app

---

## 🔐 Admin Access

### Accessing Admin Panel

1. Navigate to http://localhost:5173
2. Click the **"Admin"** button (bottom-left corner with shield icon)
3. Enter password: `admin123`
4. Click **"Sign In"**

### Admin Features

#### Dashboard Overview
- View total product count
- See all products in table format
- Quick actions for edit/delete

#### Adding a Product
1. Click **"Add Product"** button
2. Fill in the form:
   - **Product Name** (required)
   - **Description** (required)
   - **Price** (required)
   - **Category** (dropdown selection)
   - **Image URL** (optional - placeholder used if empty)
   - **Brand** (optional)
3. Click **"Add Product"**

#### Editing a Product
1. Click the **edit icon** (pencil) next to any product
2. Modify the fields you want to change
3. Click **"Update Product"**

#### Deleting a Product
1. Click the **trash icon** next to any product
2. Confirm deletion in the popup
3. Product is removed immediately

#### Logout
- Click **"Logout"** button in top-right corner
- Redirects back to shop view

---


## 🐛 Troubleshooting

### Common Issues

#### Backend won't start

**Problem:** `Error: Cannot find module 'express'`

**Solution:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### Frontend won't start

**Problem:** Port 5173 is already in use

**Solution:**
```bash
# Kill the process using port 5173
# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:5173 | xargs kill -9

# Or change the port in vite.config.ts
```

#### Products not loading

**Problem:** "Failed to load products"

**Solution:**
1. Check if backend is running on http://localhost:5000
2. Open browser console (F12) and check for errors
3. Verify CORS is enabled in backend
4. Check `data.json` file exists in `backend/data/`

#### Admin login not working

**Problem:** "Invalid password"

**Solution:**
- Password is: `admin123` (case-sensitive)
- Clear browser cache and localStorage
- Check browser console for errors

#### Cart not persisting

**Problem:** Cart empties on page refresh

**Solution:**
- Enable localStorage in browser settings
- Check if localStorage is available:
```javascript
console.log(localStorage.getItem('cart'));
```

### Port Conflicts

If ports 5000 or 5173 are in use:

**Change Backend Port:**
```javascript
// backend/server.js
const PORT = 5001; // Change from 5000
```

**Change Frontend Port:**
```javascript
// frontend/vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // Change from 5173
  }
});
```

Remember to update API URL in frontend:
```typescript
// frontend/src/services/api.ts
const API_BASE_URL = 'http://localhost:5001/api'; // Update port
```

---

## 🔧 Development

### Available Scripts

#### Backend
```bash
npm start       # Start production server
npm run dev     # Start development server with auto-reload
```

#### Frontend
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

### Code Quality

The project follows these practices:
- ✅ TypeScript for type safety
- ✅ ESLint for code linting
- ✅ Component-based architecture
- ✅ Context API for state management
- ✅ RESTful API design
- ✅ Responsive design principles

---


---


If you have any questions or need help, please:

- Email: pratikthebagul@gmail.com

---

**Happy Coding! 🚀**
