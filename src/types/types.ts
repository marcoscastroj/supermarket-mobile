export interface Product {
    name: string;
    price: number;
    promoPrice?: number;
    type: string;
    description: string;
    expirationDate: string;
  }
  
  export interface CartItem {
    productName: string;
    price: number;
  }
  
  export interface Purchase {
    productName: string;
    price: number;
    purchaseDate: string;
  }
  
  export interface User {
    fullName: string;
    username: string;
    password: string;
  }
  