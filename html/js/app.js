'use strict';
console.log('program start');

// User writes a todo-item
// User press add button to add
// todo-item goes into todo-item container

// Get the add item container
var addItemUl = document.querySelector('.add-item-ul');
console.log(addItemUl);

// Get todo-item container
var todoItemUl = document.querySelector('.todo-item-ul');

// Get add-item li
var addItemLi = document.querySelector('.add-item');
console.log(addItemLi)

// Get value from add-item input
var addItemInput = addItemLi.firstElementChild.nextElementSibling;
console.log('addItemValue:' + addItemInput.value);

// Add item button
var addButton = document.querySelector('.add-button');

var createTodo = function() {
    var todoLi = document.createElement('li');
    var todoP = document.createElement('p');
    var button = document.createElement('button');
    
    todoLi.appendChild(todoP);
    todoLi.appendChild(button);
    return todoLi;
};

// Click the button and output something
addButton.addEventListener('click', function() {
    var item = createTodo();
    todoItemUl.appendChild(item);
});

// build new todo-item
// create a  'create todo item' function