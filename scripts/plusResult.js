window.addEventListener('load',() => {

    var myTask = localStorage.getItem('TASKS');
    document.getElementById('myList').innerHTML = myTask;

})


