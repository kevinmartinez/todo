'use strict';
console.log('program start');

// User writes a todo-item
// User press add button to add
// todo-item goes into todo-item container

// Get the add item container
var addItemUl = document.querySelector('.add-item-ul');
console.log(addItemUl);

// Get add-item li
var addItemLi = document.querySelector('.add-item');
console.log(addItemLi)

// Get value from add-item input
var addItemInput = addItemLi.firstElementChild.nextElementSibling;
console.log('addItemValue:' + addItemInput.value);