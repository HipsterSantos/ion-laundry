export interface Services{
    type: string;
    name: string | 'lavagem' | 'secagem' | 'Engomar' | 'Entrega';
    description: string;
}