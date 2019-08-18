let listItems = document.querySelectorAll('li');
let ourHeader = document.querySelector('h3');
let btn = document.querySelector('button');
let ulist = document.querySelector('ul');
let divCtner = document.querySelector('#container');


btn.addEventListener('click', addItem);

function addItem() {
    
    let newLi = document.createElement('li');
    let textNde = document.createTextNode('New list');
    newLi.appendChild(textNde);
    ulist.appendChild(newLi);

}

ourHeader.addEventListener('mouseover', changHeader1);

function changHeader1() {
    this.textContent = 'New Text here on Mouseover';
}

ourHeader.addEventListener('mouseout', changHeader2);

function changHeader2() {
    this.textContent = 'DEMONSTRATION';
}