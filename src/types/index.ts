export interface IProduct {
    title: string;
    category: string;
    image: string;
    price: number;
    id: string;
    description: string;
    isInBucket: boolean;
}

export interface IOrder {
    payment: 'Онлайн' | 'При получении';
    email: string;
    phone: string;
    adress: string;
    total: number;
    items: string[]; 
}

export interface ICardsData {
    products: IProduct[];
}

export type TBucket = Pick<IOrder, 'items' | 'total'>;
export type TPaymentInfo = Pick<IOrder, 'adress' | 'payment'>; 
export type TUserInfo = Pick<IOrder, 'email' | 'phone'>; 
export type TPaid = Pick<IOrder, 'total'>;
export type TBusketCount = Pick<IOrder, 'items'>;

