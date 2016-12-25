// 'use strict';
console.debug('program begin');
// add item to .todo-item-container
    // when press button -add-button
        // add li to .todo-citem-container ul
// target add-button
var addButton = document.querySelector('.add-button');
var todoItemContainer = document.querySelector('.todo-item-container');
var addItemInputEle = document.getElementById("add-item");
var todoItemUl = document.querySelector('.todo-item-ul');
// element variables
var li = document.createElement('li');
var label = document.createElement('label');
var input = document.createElement('input');
var button = document.createElement('button');

// todo: reconsider functions
// var createListItems = function() {
//     var newItem = li;
//     var newItemLabel = label;
//     var newItemInput = input;
// }

//  var addListItem = function () {
//     console.log('hello from event');
//     var newItem = li;
//     var newItemLabel = label;
//     newItemLabel.setAttribute('for', 'add-item');
//     newItemLabel.innerHTML = 'done?';
//     newItem.appendChild(newItemLabel);
    
//     // var text = addItemInputEle.value;
//     var newItemInput = input;
//     newItemInput.setAttribute('type', 'text');
//     newItem.appendChild(newItemInput);
//     var newItemButton = button;
//     //newItemButton.classList.add('add-button');
//     newItemButton.setAttribute('type', 'checkbox');
//     newItem.appendChild(newItemButton);
//     // label.setAttribute('for', 'add-item');
   
//     // newItemInput.setAttribute('placeholder', text); 
//     todoItemUl.appendChild(newItem, todoItemUl)
// }

// addButton.addEventListener('click', addListItem());







