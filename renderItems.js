


export function renderItems(items){
    
    const li = document.createElement('li');
    const name = document.createElement('h3');
    const crafter = document.createElement('p');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');
    
    li.classList.add('id');

    name.classList.add('name');
    name.textContent = items.name;

    crafter.classList.add('crafter');
    crafter.textContent = `Crafted by ${items.crafter}`;

    img.classList.add('image');
    img.src = items.image;
    

    description.classList.add('description');
    description.textContent = items.description;

    price.classList.add('price');
    price.textContent = `Cost ${items.price}`;
    
    button.textContent = 'Add to inventory';
    
    li.append(name);
    li.append(crafter);
    li.append(img);
    li.append(description);
    li.append(price);
    li.append(button);
    return li;
}