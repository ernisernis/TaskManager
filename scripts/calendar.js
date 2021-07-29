const calendarElements = document.querySelectorAll('[data-calendar]');


const allTasks = localStorage.getItem("TASKSCALENDAR");
let allTaskSplit = allTasks.split("<li>", "</li>");
//allTaskSplit2 = allTaskSplit.split("</li>");
alert(allTaskSplit);

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
];

const today = new Date();

const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

let selected = today;

if (calendarElements.length > 0) {
    calendarElements.forEach(calendarE1 => {
        createCalendarHeader(calendarE1);
        createCalendarDaysOfWeek(calendarE1);
        createCalendarBody(calendarE1);
        createCalendar(calendarE1);
        const prevMonthBtn = calendarE1.querySelector('.prev-month');
        const nextMonthBtn = calendarE1.querySelector('.next-month');
        prevMonthBtn.addEventListener('click', getPrevMonth.bind(calendarE1));
        nextMonthBtn.addEventListener('click', getNextMonth.bind(calendarE1));
    });
}

function createCalendarHeader(calendarE1) {
    const calendarHeader = document.createElement('div');
    calendarHeader.classList.add('calendar__header');
    const calendarHeaderTop = document.createElement('div');
    calendarHeaderTop.classList.add('calendar__header_top');
    calendarHeaderTop.innerHTML = `
        <button class="btn prev-month"><span>&larr;</span></button>
        <h2 class="current-month">${selected.getMonth() + 1} - ${selected.getFullYear()}</h2>
        <button class="btn next-month"><span>&rarr;</span></button>
    `;
    calendarHeader.appendChild(calendarHeaderTop);
    calendarE1.appendChild(calendarHeader);
}

function createCalendarDaysOfWeek(calendarE1) {
    const calendarDays = document.createElement('div');
    calendarDays.classList.add('calendar__header_days', 'row');
    calendarDays.innerHTML = `
        <div class="column">Mon</div>
        <div class="column">Tue</div>
        <div class="column">Wed</div>
        <div class="column">Thu</div>
        <div class="column">Fri</div>
        <div class="column">Sat</div>
        <div class="column">Sun</div>
    `;

    calendarE1.querySelector('.calendar__header').appendChild(calendarDays);
}

function createCalendarBody(calendarE1) {
    const calendarBody = document.createElement('div');
    calendarBody.classList.add('calendar__body');
    calendarE1.appendChild(calendarBody);
}

function createCalendar(calendarE1) {
    const calendarBody = calendarE1.querySelector('.calendar__body');
    calendarBody.innerHTML = '';

    const date = new Date(selected.getFullYear(), selected.getMonth() + 1, 0);
    const prevDate = new Date(selected.getFullYear(), selected.getMonth(), 0);

    const calendarHeader = calendarE1.querySelector('.calendar__header');
    calendarHeader.querySelector('.current-month').innerHTML = `${monthNames[selected.getMonth()]} - ${selected.getFullYear()}`;

    const daysInMonth = date.getDate();
    const firstDayInMonth = new Date(selected.getFullYear(), selected.getMonth(), 1).getDay();
    const daysInWeek = [1, 2, 3, 4, 5, 6, 0];

    const rows = 6;

    const columns = 7;

    let startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
    let prevStartingDay = prevDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;

    let x = 1;
    let nextMonthStart = 1;

    for (let i = 1; i < rows + 1; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 1; j < columns + 1; j++) {
            const column = document.createElement('div');
            column.classList.add('box');

            const numberE1 = document.createElement('span');
            column.appendChild(numberE1);

            if (i === 1) {
                if (j < startingPoint) {
                    column.classList.add('in-prev-month');
                    column.setAttribute('data-date', `${prevStartingDay}-${selected.getMonth() === 0 ? 12 : selected.getMonth()}-${selected.getMonth() === 0 ? selected.getFullYear() - 1 : selected.getFullYear()}`);

                    numberE1.innerHTML = prevStartingDay;
                    prevStartingDay++;
                } else {
                    column.setAttribute('data-date', `${x}-${selected.getMonth() + 1}-${selected.getFullYear()}`);
                    numberE1.innerHTML = x;
                    x++;
                }
            } else if (i > 1 && x < daysInMonth + 1) {
                column.setAttribute('data-date', `${x}-${selected.getMonth() + 1}-${selected.getFullYear()}`);
                numberE1.innerHTML = x;
                x++;
            } else {
                column.classList.add('in-next-month');
                numberE1.innerHTML = nextMonthStart;
                column.setAttribute('data-date', `${nextMonthStart}-${selected.getMonth() + 2 === 13 ? 1 : selected.getMonth() + 2}-${selected.getMonth() + 2 === 13 ? selected.getFullYear() + 1 : selected.getFullYear()}`);
                nextMonthStart++;
            }

            if (column.dataset.date === todayFormatted) {
                column.classList.add('today');
            }

            if (column.dataset.date === "24-7-2021") {
                column.classList.add('today2');
            }

            column.addEventListener('click', (e) => {
                console.log(column.dataset.date);
            });

            row.appendChild(column);
        }
        calendarBody.appendChild(row);
    }
}

function getPrevMonth(e) {
    e.preventDefault();
    selected = new Date(selected.getFullYear(), selected.getMonth() - 1, 1);
    createCalendar(this);
}

function getNextMonth(e) {
    e.preventDefault();
    selected = new Date(selected.getFullYear(), selected.getMonth() + 1, 1);
    createCalendar(this);
}