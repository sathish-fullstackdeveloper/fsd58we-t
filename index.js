// querySelector: to select the html elements(id, class, tag)
const contentParagraph = document.querySelector('#content-paragraph');

contentParagraph.style.color = 'green';

const prosList = document.querySelector('.prosList');

prosList.classList.add('red', 'font-md');

const items = document.querySelectorAll('.item');

for (let index = 0; index < items.length; index++){
    items[index].innerText = '✔ ' + items[index].innerText;
}

const lists = document.querySelectorAll('ul');

for (let index = 0; index < lists.length; index++){
    lists[index].style.listStyleType = 'none';
}

const item = document.querySelector('.item');

console.log(item);

const lastItem = document.querySelectorAll('.item');

console.log(lastItem[lastItem.length - 1]);

const divBlock = document.querySelector('.divBlock');

console.log(divBlock.innerText);
console.log(divBlock.textContent);

const consList = document.querySelector('.consList');

consList.classList.add('red');