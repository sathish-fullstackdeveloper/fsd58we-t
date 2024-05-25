// create a small notification in the top of the screen.
const notification = document.getElementById('notification');

notification.textContent = 'This is a notification!';

setTimeout(() => {
    notification.classList.add('hide');
}, 1000);