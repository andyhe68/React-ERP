export interface DashboardStats {
    totalRevenue: number;
    totalOrders: number;
    totalProducts: number;
    totalCustomers: number;
    revenueChange: number;
    orderChange: number;
    productChange: number;
    customerChange: number;
  }
  
  export type OrderStatus =
    | "completed"
    | "processing"
    | "pending"
    | "cancelled";
  
  export interface Order {
    id: string;
    customer: string;
    product: string;
    amount: number;
    status: OrderStatus;
    date: string;
    progress: number;
  }
  
  export type InventoryStatus =
    | "normal"
    | "low"
    | "critical";
  
  export interface InventoryItem {
    id: string;
    name: string;
    category: string;
    stock: number;
    minStock: number;
    price: number;
    warehouse: string;
    status: InventoryStatus;
  }
  
  export interface Customer {
    id: string;
    name: string;
    contact: string;
    phone: string;
    email: string;
    level: "VIP" | "Gold" | "Silver";
    totalOrders: number;
    totalSpent: number;
    status: "active" | "inactive";
    joined: string;
  }
  
  export interface PurchaseOrder {
    id: string;
    supplier: string;
    items: number;
    total: number;
    status: "pending" | "in-transit" | "received";
    date: string;
    expected: string;
  }
  
  export interface Employee {
    id: string;
    name: string;
    department: string;
    position: string;
    phone: string;
    email: string;
    salary: number;
    status: "active" | "leave";
    joined: string;
  }
  
  export interface MonthlyRevenue {
    month: string;
    value: number;
  }
  
  export interface Notification {
    id: number;
    title: string;
    desc: string;
    time: string;
    type: "order" | "alert" | "approval" | "system";
  }
  
  export interface TopProduct {
    name: string;
    sales: number;
    revenue: number;
    growth: number;
  }