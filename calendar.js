const calendar = document.querySelector('.dates');
const calendarHeadMonth = document.querySelector('.month');
const calendarHeadYear = document.querySelector('.year');

const calNavLeft = document.querySelector('#cal-nav-left');
const calNavRight = document.querySelector('#cal-nav-right');

const time = new Date();
const date = time.getDate();
const day = time.getDay();
let month = time.getMonth() + 1;
let year = time.getFullYear();


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const monthName = months[month - 1];
const dayName = days[day];

calendarHeadMonth.innerHTML = monthName;
calendarHeadYear.innerHTML = year;

let totalDatesInCurrentMonth = new Date(year, month, 0).getDate();
let totalDatesInPrevMonth = new Date(year, month - 1, 0).getDate();

let firstDayOfCurrentMonth = new Date(year, month - 1, 1).getDay();


const totalCells = 6 * 7




updateCalendar()
function updateCalendar() {
    for (let i = 0; i < totalCells; i++) {
        if (i < firstDayOfCurrentMonth) {
            let cell = document.createElement('div');
            cell.classList.add('date');
            cell.classList.add('grey')
            cell.innerHTML = totalDatesInPrevMonth - firstDayOfCurrentMonth + i + 1;
            calendar.appendChild(cell);
        } else {
            d = i - firstDayOfCurrentMonth + 1;
            let cell = document.createElement('div');
            if (d > totalDatesInCurrentMonth) {
                d = d - totalDatesInCurrentMonth;
                cell.classList.add('grey')
            }
            cell.classList.add('date');
            cell.innerHTML = d;
            if ( d === date && month === time.getMonth() + 1 && year === time.getFullYear() && !cell.classList.contains('grey')
            ) {
                cell.classList.add('today');
            }
            calendar.appendChild(cell);
        }
    }
}


calNavLeft.addEventListener('click', () => {
    month--;
    if (month < 1) {
        month = 12;
        year--;
    }
    calendar.innerHTML = '';

    // reinitialize all variables
    firstDayOfCurrentMonth = new Date(year, month - 1, 1).getDay();
    totalDatesInPrevMonth = new Date(year, month - 1, 0).getDate();
    totalDatesInCurrentMonth = new Date(year, month, 0).getDate();



    updateCalendar();
    calendarHeadMonth.innerHTML = months[month - 1];
    calendarHeadYear.innerHTML = year;
})
calNavRight.addEventListener('click', () => {
    month++;
    if (month > 12) {
        month = 1;
        year++;
    }
    calendar.innerHTML = '';

    // reinitialize all variables
    firstDayOfCurrentMonth = new Date(year, month - 1, 1).getDay();
    totalDatesInPrevMonth = new Date(year, month - 1, 0).getDate();
    totalDatesInCurrentMonth = new Date(year, month, 0).getDate();

    updateCalendar();
    calendarHeadMonth.innerHTML = months[month - 1];
    calendarHeadYear.innerHTML = year;
})