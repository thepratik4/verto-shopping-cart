import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productsPath = path.join(__dirname, '../data/data.json');

// Helper function to read products
const readProducts = () => {
   try {
    console.log('Reading products from:', productsPath); // Debug line
    const data = fs.readFileSync(productsPath, 'utf8');
    const products = JSON.parse(data);
    console.log('Products loaded:', products.length); // Debug line
    return products;
  } catch (error) {
    console.error('Error reading products file:', error);
    return [];
  }
};

//Helper function to write products
const writeProducts = (products) => {
  fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
};

// GET /api/products - Get all products
router.get('/', (req, res) => {
   try {
    console.log('GET /api/products requested'); // Debug line
    const products = readProducts();
    console.log('Sending products:', products); // Debug line
    res.json(products);
  } catch (error) {
    console.error('Error in GET /api/products:', error);
    res.status(500).json({ error: 'Failed to load products' });
  }
});

// GET /api/products/:id - Get single product
router.get('/:id', (req, res) => {
  try {
    const products = readProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load product' });
  }
});

// POST /api/products - Create new product
router.post('/', (req, res) => {
  try {
    const { name, price, description, imageUrl, category } = req.body;
    
    // Validation
    if (!name || !price || !description) {
      return res.status(400).json({ error: 'Name, price, and description are required' });
    }
    
    const products = readProducts();
    const newProduct = {
      id: Math.max(...products.map(p => p.id)) + 1,
      name,
      price: parseFloat(price),
      description,
      imageUrl: imageUrl || 'https://via.placeholder.com/150',
      category: category || 'general',
      createdAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    writeProducts(products);
    
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// PUT /api/products/:id - Update product
router.put('/:id', (req, res) => {
  try {
    const products = readProducts();
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    const { name, price, description, imageUrl, category } = req.body;
    const updatedProduct = {
      ...products[productIndex],
      ...(name && { name }),
      ...(price && { price: parseFloat(price) }),
      ...(description && { description }),
      ...(imageUrl && { imageUrl }),
      ...(category && { category }),
      updatedAt: new Date().toISOString()
    };
    
    products[productIndex] = updatedProduct;
    writeProducts(products);
    
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE /api/products/:id - Delete product
router.delete('/:id', (req, res) => {
  try {
    const products = readProducts();
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    const deletedProduct = products.splice(productIndex, 1)[0];
    writeProducts(products);
    
    res.json({ 
      message: 'Product deleted successfully',
      product: deletedProduct 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;