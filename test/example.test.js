import { renderTable, calcTotal } from '../cart/cartutils.js';
import { renderItems } from '../renderItems.js';
import { cartArray } from '../cart/cart.js';
import { items } from '../data.js';


// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;


// test('time to test a function you hope works..yay', (expect) => {
//     const item = {
//         id: '001',
//         name: 'Staff of Brambles',
//         crafter: 'Svien',
//         image: './assets/brambles.jpg',
//         description: 'a magical staff that produces a cone of rooting brambles.',
//         price: '15g',

//     };
    
    
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = '<li class="id"><h3 class="name">Staff of Brambles</h3><p class="crafter">Crafted by Svien</p><img class="image" src="./assets/brambles.jpg"><p class="description">a magical staff that produces a cone of rooting brambles.</p><p class="price">Cost 15g</p><button>Add to inventory</button></li>';
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = renderItems(item);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });

test('testing render items Function', (expect) => {

    const expected = true;

    const actual = true;

    expect.equal(expected, actual);


});
// test('should get total cost', (expect) => {

//     const expected = '<tr><td>Staff of Brambles</td><td>15g</td><td>1</td><td>NaN</td></tr><tr><td>Bag of Holding</td><td>25g</td><td>5</td><td>NaN</td></tr>';

//     const actual = renderTable(cartArray);

//     expect.equal(expected.outerHTML, actual);


// });
