export interface Products{
    name: string;
    amount: number;
    price: number;
    color: Color;
}

export interface Color{
    [index: string]: 'red' | 'green' | 'blue' | 'orange' | 'rose' | 'yellow';
}

