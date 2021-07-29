function handleSubmit() {

    var plusTask = document.getElementById('plusTask').value;
    var plusDate = document.getElementById('plusDate').value;
    var plusDesc = document.getElementById('plusDesc').value;

    var myList = localStorage.getItem('TASKS');
    var myTaskCount = localStorage.getItem('TASKSCOUNT');
    var myExperience = localStorage.getItem("EXPERIENCE");
    var myList2 = localStorage.getItem('TASKSCALENDAR');

    alert(myList);
    alert(myList2);

    document.getElementById('myList').innerHTML = myList;
    document.getElementById('myTaskCount').innerHTML = myTaskCount;
    document.getElementById('myExperience').innerHTML = myExperience;
    document.getElementById('myList2').innerHTML = myList2;

    var myList = document.getElementById('myList');
    var myTaskCount = document.getElementById('myTaskCount');
    var myExperience = document.getElementById("myExperience");
    var myList2 = document.getElementById('myList2');

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
    myList2.innerHTML += `<li>${reformatDate(plusDate)}</li>`;

    window.localStorage.setItem("TASKS", myList.innerHTML);
    window.localStorage.setItem("TASKSCOUNT", a);
    window.localStorage.setItem("EXPERIENCE", b);
    window.localStorage.setItem("TASKSCALENDAR", myList2.innerHTML);
}

function clearTasks() {
    window.localStorage.removeItem('TASKS');
    location.reload();
}

function reformatDate(dateStr) {
    dArr = dateStr.split("-");
    return dArr[2] + "-" + dArr[1] + "-" + dArr[0];
}