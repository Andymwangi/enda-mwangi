export interface Package {
  name: string;
  price: { usd: number; ksh: number };
  duration: string;
  features: string[];
  popular: boolean;
}

export interface PaymentData {
  packageName: string;
  price: number;
  currency: string;
  localPrice: number;
  localCurrency: string;
  service: string;
}

export interface PayPalOrderResponse {
  id: string;
  status: string;
  links: Array<{
    href: string;
    rel: string;
    method: string;
  }>;
}