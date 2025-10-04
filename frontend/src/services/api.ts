const API_BASE_URL = 'http://localhost:5000/api';


export interface ApiProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  brand: string;
}

export interface CheckoutRequest {
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  customerInfo?: {
    name?: string;
    email?: string;
    address?: string;
  };
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
  orderId: string;
  total: number;
}

export const api = {
  async getProducts(): Promise<ApiProduct[]> {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  async getProduct(id: number): Promise<ApiProduct> {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  },

  async createProduct(product: Omit<ApiProduct, 'id'>): Promise<ApiProduct> {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('Failed to create product');
    }
    return response.json();
  },

  async updateProduct(id: number, product: Partial<ApiProduct>): Promise<ApiProduct> {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('Failed to update product');
    }
    return response.json();
  },

  async deleteProduct(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
  },

  async checkout(data: CheckoutRequest): Promise<CheckoutResponse> {
    const response = await fetch(`${API_BASE_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to process checkout');
    }
    return response.json();
  },

  async getOrder(orderId: string) {
    const response = await fetch(`${API_BASE_URL}/checkout/${orderId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch order');
    }
    return response.json();
  },

  async checkHealth() {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) {
      throw new Error('Backend is not available');
    }
    return response.json();
  }
};
