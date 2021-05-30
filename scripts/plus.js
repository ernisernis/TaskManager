function handleSubmit () {

    var plusTask = document.getElementById('plusTask').value;
    var plusDate = document.getElementById('plusDate').value;
    var plusDesc = document.getElementById('plusDesc').value;

    var myList = localStorage.getItem('TASKS');
    var myTaskCount = localStorage.getItem('TASKSCOUNT');
    var myExperience = localStorage.getItem("EXPERIENCE");

    document.getElementById('myList').innerHTML = myList;
    document.getElementById('myTaskCount').innerHTML = myTaskCount;
    document.getElementById('myExperience').innerHTML = myExperience;

    var myList = document.getElementById('myList');
    var myTaskCount = document.getElementById('myTaskCount');
    var myExperience = document.getElementById("myExperience");

    let b = parseInt(myExperience.innerHTML);
    let a = parseInt(myTaskCount.innerHTML);
    if (isNaN(a) === true) {
        b = 1;
        a = 1;
    } else {
        a += 1;
        b += Math.floor(Math.random() * 11);
    }

    myList.innerHTML += "<li>" + plusTask + " " + plusDate + " " + plusDesc + " " + "</li>";

    window.localStorage.setItem("TASKS",myList.innerHTML);
    window.localStorage.setItem("TASKSCOUNT",a);
    window.localStorage.setItem("EXPERIENCE",b);
}

function clearTasks() {
    window.localStorage.removeItem('TASKS');
    location.reload();
}