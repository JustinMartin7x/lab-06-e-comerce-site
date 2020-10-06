import { items } from './data.js';
import { renderItems } from './renderItems.js';

const ul = document.querySelector('#lists');

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = renderItems(item);
    ul.appendChild(li);
}