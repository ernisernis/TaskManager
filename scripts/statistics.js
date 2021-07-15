
window.addEventListener('load', () => {

    var pTasksCreated = localStorage.getItem("TASKSCOUNT");
    document.getElementById("tasks-count").innerHTML = pTasksCreated;

    var pExperience = localStorage.getItem("EXPERIENCE");
    document.getElementById("experience").innerHTML = pExperience;
})
