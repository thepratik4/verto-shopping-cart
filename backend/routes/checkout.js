import express from 'express';

const router = express.Router();

// POST /api/checkout - Create new order
router.post('/', (req, res) => {
  try {
    const { items, customerInfo } = req.body;

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'Invalid order data' });
    }

    // Validate items
    for (const item of items) {
      if (!item.id || !item.name || !item.price || !item.quantity) {
        return res.status(400).json({ 
          error: 'Invalid item data', 
          item 
        });
      }
    }

    console.log('=== NEW ORDER ===');
    console.log('Order Details:', JSON.stringify(items, null, 2));
    console.log('Customer Info:', customerInfo);
    console.log('Total Items:', items.reduce((sum, item) => sum + item.quantity, 0));
    console.log('Total Amount: $', items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2));
    console.log('================\n');

    res.json({
      success: true,
      message: 'Order placed successfully',
      orderId: `ORD-${Date.now()}`,
      total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process checkout' });
  }
});

// GET /api/checkout/:orderId - Get order details
router.get('/:orderId', (req, res) => {
  try {
    // In a real app, you'd fetch from database
    // For now, return mock data
    res.json({
      orderId: req.params.orderId,
      status: 'completed',
      items: [],
      total: 0,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

export default router;