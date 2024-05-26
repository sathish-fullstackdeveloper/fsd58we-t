// callback hell or pain of callback
function firstTask(callback) {
    console.log('starting first task...');
    setTimeout(() => {
        console.log('first task done');
        callback();
    }, 3000);
}

function secondTask(callback) {
    console.log('starting second task...');
    setTimeout(() => {
        console.log('second task done');
        callback();
    }, 4000);
}

function thirdTask(callback) {
    console.log('starting third task...');
    setTimeout(() => {
        console.log('third task done');
        callback();
    }, 5000);
}

firstTask(function () {
    secondTask(function () {
        thirdTask(function () {
            console.log('all tasks done');
        });
    });
});