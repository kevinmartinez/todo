// 'use strict';
console.debug('program begin');
// add item to .todo-item-container
    // when press button -add-button
        // add li to .todo-citem-container ul

// target add-button
var addButton = document.querySelector('.add-button');
var todoItemContainer = document.querySelector('.todo-item-container');
var addItemInputEle = document.getElementById("add-item");

// create a li


var addListItem = function() {
    var li = document.createElement('li');
    li.innerHTML = addItemInputEle.value;
    todoItemContainer.appendChild(li)
}

addButton.addEventListener('click', function(e) {
    addListItem();
    console.log('hello from event');
    e.preventDefault();
});







