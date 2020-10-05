


export function renderItems(items){
    
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const crafter = document.createElement('p');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');
    
    li.classList.add('id');

    h3.classList.add('name');
    h3.textContent = items.name;

    crafter.classList.add('crafter');
    crafter.textContent = `crafted by ${items.crafter}`;

    img.classList.add('image');
    img.src = `../assets${items.image}`;

    description.classList.add(description);
    description.textContent = items.description;

    price.classList.add(price);
    price.textContent = `Cost ${items.price}`;
    
    button.textContent = 'Add to Inventory';
    
    li.append(h3);
    li.append(crafter);
    li.append(img);
    li.append(description);
    li.append(price);
    li.append(button);

}




// const li = document.createElement('li')
//     li.classList.add(fruit.category);
//     li.title = fruit.description;
//     const h3 = document.createElement('h3');
//     h3.textContent = fruit.name;
   
//     const img = document.createElement('img');
//     img.src = fruit.img;
//     img.alt = `${fruit.name} image`;

//     const p = document.createElement('p')
//     p.classList.add('price')
//     p.textContent = `$${fruit.price.toFixed(2)}`;

//     const button = document.createElement('button')
//     button.value = fruit.code;
//     button.textContent = 'Add';


  
//     li.appendChild(h3);
//     li.appendChild(img);
//     li.appendChild(p);
//     p.appendChild(button);
  