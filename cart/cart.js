import { renderTable } from './cartutils.js';
import { items } from '../data.js';


const table = document.querySelector('tbody')

const cartArray = [
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
    table.append(tr);
}









// id: '001',
// name: 'Staff of Brambles',
// price: '15g',