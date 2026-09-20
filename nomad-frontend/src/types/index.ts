export type UserRole = "Owner" | "Admin" | "Member";

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  productCount: number;
}

export interface ProductSpecs {
  weight: string | null;
  capacity: string | null;
  season: string | null;
  waterproof: string | null;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  rentPricePerDay: number | null;
  colors: string[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  badge: string | null;
  featured: boolean;
  isRentable: boolean;
  inStock: boolean;
  description: string;
  specs: ProductSpecs;
  features: string[];
}

export interface ProductImage {
  id: number;
  productId: number;
  url: string;
  alt: string;
  order: number;
  isPrimary: boolean;
}

export interface CartItem {
  id: number;
  userId: number;
  productId: number;
  qty: number;
  color: string | null;
  size: string | null;
}

export interface OrderItem {
  productId: number;
  qty: number;
  price: number;
  color: string | null;
  size: string | null;
}

export interface ShippingAddress {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: number;
  userId: number;
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: "Paid" | "Pending" | "Refunded" | "Cancelled";
  paymentMethod: string;
  shippingAddress: ShippingAddress;
  createdAt: string;
}
