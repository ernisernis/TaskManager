function handleSubmit() {

    let plusTask = document.getElementById("plusTask").value;
    let plusDate = document.getElementById("plusDate").value;
    let plusDesc = document.getElementById("plusDesc").value;

    let myList = localStorage.getItem("TASKS");
    let myTaskCount = localStorage.getItem("TASKSCOUNT");
    let myExperience = localStorage.getItem("EXPERIENCE");

    document.getElementById("myList").innerHTML = myList;
    document.getElementById("myTaskCount").innerHTML = myTaskCount;
    document.getElementById("myExperience").innerHTML = myExperience;

    myList = document.getElementById('myList');
    myTaskCount = document.getElementById('myTaskCount');
    myExperience = document.getElementById("myExperience");

    let b = parseInt(myExperience.innerHTML);
    let a = parseInt(myTaskCount.innerHTML);
    if (isNaN(a) === true) {
        b = 1;
        a = 1 + Math.floor(Math.random() * 11);
    } else {
        a += 1;
        b += Math.floor(Math.random() * 11);
    }

    myList.innerHTML += `<li class="subjectName"> ${plusTask} ${plusDate} ${plusDesc} <button onclick="clearATask()">Remove</button></li>`;

    let calendarTasks = JSON.parse(localStorage.getItem("TASKSARRAY"));
    if (calendarTasks === null) {
        calendarTasks = [];
        calendarTasks[0] = reformatDate(plusDate);
        localStorage.setItem("TASKSARRAY", JSON.stringify(calendarTasks));
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
    window.localStorage.removeItem("TASKS");
    window.localStorage.removeItem("TASKSARRAY");
    window.localStorage.removeItem("COUNT");
    location.reload();
}

function reformatDate(dateStr) {
    dArr = dateStr.split("-");
    console.log(dArr);
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

function clearATask() {


    var allSubjectName = document.querySelectorAll(".subjectName");
    for (var index = 0; index < allSubjectName.length; index++) {
        allSubjectName[index].addEventListener("click", function () {
            this.classList.toggle("active");
        });
        allSubjectName[index].querySelector("button").addEventListener("click",
            function () {
                console.log(this.closest(".subjectName"));
                const task = this.closest(".subjectName");
                console.log(removeATaskFromCalendar(task));
                let taskString = task.outerHTML;
                taskString = taskString.replace(" active", "");
                let array = localStorage.getItem("TASKS");
                array = array.replace(taskString, "");
                window.localStorage.setItem("TASKS", array);
                this.closest(".subjectName").remove();
            });
    }
}

function removeATaskFromCalendar(closest) {
    //closest = closest.outerHTML;
    //matches = closest.matches(/\d+/g);
    return closest;
}