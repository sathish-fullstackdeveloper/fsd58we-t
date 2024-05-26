let paragraph = document.createElement('p');
paragraph.textContent = '10';

document.body.appendChild(paragraph);

const interval = setInterval(() => {
    paragraph.textContent = parseInt(paragraph.textContent) - 1;
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    paragraph.textContent = 'Happy Independence Day!';
}, 10000);