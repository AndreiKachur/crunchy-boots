export interface DbItem {
    id: number;
    title: string;
    category: string;
    url: string[];
    homelink: string;
    gender: string;
    price: number;
    color: string;
    newCollection: string;
    topseller: string;
    discount: string;
    boost: string;
    description: string;
    actualSize: number;
    sizes: SizeType[];
    idSize?: number;
    amount?: number
}
export interface CartItem extends DbItem {
    idSize: number;
    amount: number;
    sizes: CartSizeType[];
}
export interface SizeType {
    size: number;
    id: number;
    rest: number;
}
export interface CartSizeType extends SizeType {
    maxRest: number
}

