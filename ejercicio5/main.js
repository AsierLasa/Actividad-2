let itemCount = 5; 

document.getElementById('addButton').onclick = function() {
    
    const newItem = document.createElement('li');

    itemCount++;
    
    newItem.textContent = 'Elemento ' + itemCount;
   
    newItem.className = 'list-group-item';
    
    document.getElementById('lista').appendChild(newItem);
};
