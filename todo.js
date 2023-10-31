const textInputField=document.querySelector('#text-input-field');
const addButton=document.querySelector('#add-button');
const todosContainer=document.querySelector('.todos-container');

addButton.addEventListener('click',()=>{
if(textInputField.value.trim().length=='')
return;
// create a div element todo-item-container
const todoItemContainer=document.createElement('div');
// to add  class name to the  todo-item-container div, we use ClassList object to add class using add method in ClassList ie classname(todo-item-container) added to the div element
todoItemContainer.classList.add('todo-item-container');
// todo-item-container ne todosContainer nte child ayt add cheyunu
todosContainer.appendChild(todoItemContainer);
// create p element add id=todo-text
const todoText=document.createElement('p');
// give id to the p element
todoText.id='todo-text';
todoText.innerText=textInputField.value;
todoItemContainer.appendChild(todoText);

// add doublrclik event to todoText
todoText.addEventListener('dblclick',()=>{
    todoText.classList.add('line-through');
// once the changes are saved edit button is disabled
editButton.setAttribute("disabled","disabled");
})


// create button add id=edit-button
const editButton=document.createElement('button');
// give id to the button
editButton.id='edit-button';
// create image add to editbutton
const editImage=document.createElement('img');
editImage.src='edit.svg';
// add image into editbutton
editButton.appendChild(editImage);
// add button to the todoItemContainer
todoItemContainer.appendChild(editButton);
// add click event to edit buutton
editButton.addEventListener('click',()=>{
    textInputField.value=todoText.innerText;
    const parent=editButton.parentElement;
    parent.parentElement.removeChild(parent);
});





// create delete button
const deleteButton=document.createElement('button');
// give id to the button
deleteButton.id='delete-button';
// create image add to deletebutton
const deleteImg=document.createElement('img');
deleteImg.src='delete.svg';
deleteButton.appendChild(deleteImg);
todoItemContainer.appendChild(deleteButton);
// add click event to delete buutton
deleteButton.addEventListener('click',()=>{
    const parent=deleteButton.parentElement;
    parent.parentElement.removeChild(parent);
});


// to empty textbox
textInputField.value=""
});