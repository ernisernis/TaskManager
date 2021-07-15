
window.addEventListener('load', () => {

    let pTasksCreated = localStorage.getItem("TASKSCOUNT");
    document.getElementById("tasks-count").innerHTML = pTasksCreated;

    let pExperience = localStorage.getItem("EXPERIENCE");
    document.getElementById("experience").innerHTML = pExperience;
})
