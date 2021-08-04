
function handleSubmit() {

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

    myList.innerHTML += `<li> ${plusTask} ${plusDate} ${plusDesc} <div class="DeleteTask">X</div></li>`;

    let calendarTasks = JSON.parse(localStorage.getItem("TASKSARRAY"));
    if (calendarTasks === null) {
        calendarTasks = [];
        calendarTasks[0] = reformatDate(plusDate);
        localStorage.setItem("TASKSARRAY", JSON.stringify(calendarTasks));
        alert(calendarTasks);
    } else {
        let count = localStorage.getItem("COUNT");
        if (count === null) {
            count = 1;
        }
        calendarTasks[count] = reformatDate(plusDate);
        localStorage.setItem("TASKSARRAY", JSON.stringify(calendarTasks));
        count++;
        window.localStorage.setItem("COUNT", count);
    }

    window.localStorage.setItem("TASKS", myList.innerHTML);
    window.localStorage.setItem("TASKSCOUNT", a);
    window.localStorage.setItem("EXPERIENCE", b);
}

function clearTasks() {
    window.localStorage.removeItem('TASKS');
    window.localStorage.removeItem("TASKSARRAY");
    window.localStorage.removeItem("TASKSCOUNT");
    location.reload();
}

function reformatDate(dateStr) {
    dArr = dateStr.split("-");
    if (dArr[2] === "20" || dArr[2] === "10" || dArr[2] === "30") {
        if (dArr[1] === "10") {
            return dArr[2] + "-" + dArr[1] + "-" + dArr[0];
        } else {
            const newdArr11 = dArr[1].replace("0", "");
            return dArr[2] + "-" + newdArr11 + "-" + dArr[0];
        }
    } else if (dArr[1] === "10") {
        const newdArr22 = dArr[2].replace("0", "");
        return newdArr22 + "-" + dArr[1] + "-" + dArr[0];
    } else {
        const newdArr2 = dArr[2].replace("0", "");
        const newdArr1 = dArr[1].replace("0", "");
        return newdArr2 + "-" + newdArr1 + "-" + dArr[0];
    }
}
