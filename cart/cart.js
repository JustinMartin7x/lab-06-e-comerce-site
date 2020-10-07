import { renderTable } from './cartutils.js';
import { items } from '../data.js';



const table = document.querySelector('tbody');


export const cartArray = [
    { 
        id: '001',
        quantity: '1',
    }, 
    {
        id: '002',
        quantity: '5'
    }
];

for (let i = 0; i < cartArray.length; i++) {
    const item = cartArray[i];
    const tr = renderTable(item);
    table.appendChild(tr);
}

export function calcTotal(cart) {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++){
        const item = cart[i];
        const itemActual = findById(cart, items.id);
        const subTotal = itemActual.price + item.quantity;
        totalCost = totalCost + subTotal;
    }
    return totalCost;
}









