// asynchronous code
function firstTask() {
    console.log('starting first task...');
    setTimeout(() => {
        console.log('first task done');
    }, 3000);
}

function secondTask() {
    console.log('starting second task...');
    setTimeout(() => {
        console.log('second task done');
    }, 4000);
}

function thirdTask() {
    console.log('starting third task...');
    setTimeout(() => {
        console.log('third task done');
    }, 5000);
}

firstTask();
secondTask();
thirdTask();