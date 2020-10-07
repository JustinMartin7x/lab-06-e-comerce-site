import { items } from '../data.js';
import { cartArray, calcTotal } from './cart.js';


export function findById(someArray, someId) {

    for (let i = 0; i < someArray.length; i++)
        if (someArray[i].id === someId) {
            return someArray[i];
        }
}


export function renderTable(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    const itemData = findById(items, cartItem.id);
    const cost = itemData.price;

    tdQuantity.textContent = cartItem.quantity;
    tdPrice.textContent = `${cost}`;
   
    const itemName = itemData.name;
    tdName.textContent = itemName;

    const total = cost * cartItem.quantity;
    tdTotal.textContent = `${total}`;
    tr.append(tdName, tdPrice, tdQuantity, tdTotal);
    return tr;
}



const totalCost = calcTotal(cartArray);
const total = document.querySelectorAll('total');
total.textContent = `${totalCost}`;