/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */
// let items = document.querySelector("#items").querySelector(".item:nth-child(1)");
// items.style.color = "orange";
// const grandparent = document.querySelector(".todo-list");
// const parent = grandparent.children;
// const children = parent[1].children;
// //  traversing dom usiing querySelector

// let items = document.querySelector('.item:nth-child(1)');
// items.style.color="green";


// // next childern  element select 
// const grandparent = document.querySelector('.todo-list');
// const parent = grandparent.children;
// Next.style.color = 'red';

// //previous element select
// const childrenPrev = document.querySelector('.item').nextElementSibling;
// const nextChildren = childrenPrev.previousElementSibling;
// nextChildren.style.color = 'green';const children = parent[1].children;
// console.log(children);


// // another next childern  element select 
// const grandparent1 = document.querySelector('.todo-list');
// const children1 = grandparent1.querySelectorAll('.item');

// console.log(children1);




// //next element select
// const childrenOne = document.querySelector('.item');
// const childrenNext = childrenOne.nextElementSibling;
// children


// for(let item of items){
//     item.style.color= "red";

// }

// DOM manipolation

// const devElement = document.createElement('div');
// devElement.className="red";

// devElement.setAttribute('id','red');
// devElement.setAttribute('title','Abdur Rahman');

// const container = document.querySelector('.todo-list');
// // const h2ELement = container.querySelector('h2');

// container.appendChild(devElement);



// //different type of events oiperation


// const headerElement = document.querySelector('#header');

// headerElement.addEventListener('mousemove',(event)=>{
//     console.log(event);
 
// })


newTask = document.querySelector('#new-task');
form  = document.querySelector('form');
todoUrl = document.querySelector('#items');
completeUrl = document.querySelector('.complete-list ul');


let createTask = function(task){
   let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');


    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}


let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUrl.appendChild(listItem);
    newTask.value = "";

    bindInCompleteItems(listItem,completeTask);

   
}


let completeTask = function(){

    let listItem = this.parentNode;
    let deletebtn = document.createElement('button');
    deletebtn.innerText= 'Delete';
    deletebtn.className= 'delete';
    listItem.appendChild(deletebtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUrl.appendChild(listItem);
    bindCompleteItems(listItem,deleteTask);

}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindCompleteItems = function(taskItems,deleteButonClick){
    let deleteButton = taskItems.querySelector('.delete');
    deleteButton.onclick = deleteButonClick;

}

let bindInCompleteItems = function(taskItems, checkBoxClick){
    let checkBox = taskItems.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;

}



for(let i = 0; i<todoUrl.children.length; i++){
    bindInCompleteItems(todoUrl.children[i], completeTask);
}

for(let i = 0; i<completeUrl.children.length; i++){
    bindCompleteItems(completeUrl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);






 // select elements & assign them to variables
//  let newTask = document.querySelector('#new-task');
//  let form = document.querySelector('form');
//  let todoUl = document.querySelector('#items');
//  let completeUl = document.querySelector('.complete-list ul');


// // functions
// let createTask = function(task) {
//     let listItem = document.createElement('li');
//     let checkBox = document.createElement('input');
//     let label = document.createElement('label');

//     label.innerText = task;
//     checkBox.type = 'checkbox';

//     listItem.appendChild(checkBox);
//     listItem.appendChild(label);

//     return listItem;
// }

// let addTask = function(event) {
//     event.preventDefault();
//     let listItem = createTask(newTask.value);
//     todoUl.appendChild(listItem);
//     newTask.value = "";
//     // bind the new list item to the incomplete list
//     bindInCompleteItems(listItem, completeTask);
// }

// let completeTask = function() {
//     let listItem = this.parentNode;
//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.className = 'delete';
//     listItem.appendChild(deleteBtn);

//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.remove();
//     completeUl.appendChild(listItem);
//     bindCompleteItems(listItem, deleteTask);
// }

// let deleteTask = function() {
//     let listItem = this.parentNode;
//     let ul = listItem.parentNode;
//     ul.removeChild(listItem);
// }

// let bindInCompleteItems = function(taskItem, checkboxClick) {
//     let checkBox = taskItem.querySelector('input[type="checkbox"]');
//     checkBox.onchange = checkboxClick;
// }

// let bindCompleteItems = function(taskItem, deleteButtonClick) {
//     let deleteButton = taskItem.querySelector('.delete');
//     deleteButton.onclick = deleteButtonClick;
// }

// for(let i=0; i< todoUl.children.length; i++ ) {
//     bindInCompleteItems(todoUl.children[i], completeTask);
// }

// for(let i=0; i< completeUl.children.length; i++ ) {
//     bindCompleteItems(completeUl.children[i], deleteTask);
// }

// form.addEventListener('submit', addTask);