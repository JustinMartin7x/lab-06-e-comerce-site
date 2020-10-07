import { renderTable } from './cartutils.js';



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









