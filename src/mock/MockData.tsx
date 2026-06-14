import type {
    DashboardStats,
    Order,
    InventoryItem,
    Customer,
    PurchaseOrder,
    Employee,
    MonthlyRevenue,
    Notification,
    TopProduct,
  } from "../types/ErpData";
  
  export const stats: DashboardStats = {
    totalRevenue: 2845600,
    totalOrders: 1284,
    totalProducts: 356,
    totalCustomers: 892,
    revenueChange: 12.5,
    orderChange: 8.3,
    productChange: -2.1,
    customerChange: 15.7,
  };
  
  export const recentOrders: Order[] = [
    {
      id: "ORD-2024-001",
      customer: "张三科技",
      product: "企业版SaaS许可",
      amount: 128000,
      status: "completed",
      date: "2024-01-15",
      progress: 100,
    },
    {
      id: "ORD-2024-002",
      customer: "李四电商",
      product: "云服务器部署",
      amount: 56000,
      status: "processing",
      date: "2024-01-14",
      progress: 65,
    },
    {
      id: "ORD-2024-003",
      customer: "王五制造",
      product: "IoT设备套件",
      amount: 235000,
      status: "pending",
      date: "2024-01-14",
      progress: 20,
    },
  ];
  
  export const inventory: InventoryItem[] = [
    {
      id: "SKU-001",
      name: "Dell R740服务器",
      category: "硬件",
      stock: 156,
      minStock: 20,
      price: 28500,
      warehouse: "A区-01架",
      status: "normal",
    },
    {
      id: "SKU-002",
      name: "Huawei S5720交换机",
      category: "网络设备",
      stock: 89,
      minStock: 30,
      price: 12800,
      warehouse: "A区-02架",
      status: "normal",
    },
    {
      id: "SKU-003",
      name: "SSD 1TB NVMe",
      category: "存储",
      stock: 12,
      minStock: 50,
      price: 680,
      warehouse: "B区-01架",
      status: "low",
    },
  ];
  
  export const customers: Customer[] = [
    {
      id: "CUST-001",
      name: "张三科技有限公司",
      contact: "张伟",
      phone: "13800001111",
      email: "zhangwei@tech.com",
      level: "VIP",
      totalOrders: 28,
      totalSpent: 1560000,
      status: "active",
      joined: "2022-03-15",
    },
    {
      id: "CUST-002",
      name: "李四电子商务有限公司",
      contact: "李娜",
      phone: "13900002222",
      email: "lina@ecom.com",
      level: "Gold",
      totalOrders: 15,
      totalSpent: 890000,
      status: "active",
      joined: "2022-06-20",
    },
  ];
  
  export const purchaseOrders: PurchaseOrder[] = [
    {
      id: "PO-2024-001",
      supplier: "华为技术有限公司",
      items: 5,
      total: 456000,
      status: "pending",
      date: "2024-01-15",
      expected: "2024-02-01",
    },
    {
      id: "PO-2024-002",
      supplier: "戴尔中国有限公司",
      items: 3,
      total: 285000,
      status: "in-transit",
      date: "2024-01-12",
      expected: "2024-01-25",
    },
  ];
  
  export const employees: Employee[] = [
    {
      id: "EMP-001",
      name: "陈经理",
      department: "销售部",
      position: "销售总监",
      phone: "13800000001",
      email: "chen@erp.com",
      salary: 28000,
      status: "active",
      joined: "2020-03-01",
    },
    {
      id: "EMP-002",
      name: "林工程师",
      department: "技术部",
      position: "高级前端工程师",
      phone: "13800000002",
      email: "lin@erp.com",
      salary: 25000,
      status: "active",
      joined: "2021-06-15",
    },
  ];
  
  export const monthlyRevenue: MonthlyRevenue[] = [
    { month: "7月", value: 186000 },
    { month: "8月", value: 215000 },
    { month: "9月", value: 198000 },
    { month: "10月", value: 245000 },
    { month: "11月", value: 232000 },
    { month: "12月", value: 268000 },
    { month: "1月", value: 312000 },
  ];
  
  export const notifications: Notification[] = [
    {
      id: 1,
      title: "新订单 ORD-2024-007",
      desc: "来自周九物流的新订单",
      time: "5分钟前",
      type: "order",
    },
    {
      id: 2,
      title: "库存预警",
      desc: "SSD 1TB NVMe库存不足",
      time: "1小时前",
      type: "alert",
    },
  ];
  
  export const topProducts: TopProduct[] = [
    {
      name: "企业版SaaS许可",
      sales: 456,
      revenue: 1280000,
      growth: 18.5,
    },
    {
      name: "云服务器部署",
      sales: 234,
      revenue: 890000,
      growth: 12.3,
    },
    {
      name: "IoT设备套件",
      sales: 189,
      revenue: 670000,
      growth: -5.2,
    },
  ];