const Input = document.getElementById('taskInput');
const listcontainer = document.getElementById('taskList');

function addTask() {
    if (Input.value === '') {
        alert('Please enter a task');
        return;
    } else {
        let li = document.createElement('li');
        li.innerHTML = Input.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '✖';
        li.appendChild(span);
    }
    Input.value = '';
    savetask();
}

listcontainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle("check");
        savetask();
    } else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        savetask();
    }
}, false);

function savetask() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
