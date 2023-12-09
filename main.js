// Создаем массивы для хранения событий по дням недели
let events = {
  "Monday": [],
  "Tuesday": [],
  "Wednesday": [],
  "Thursday": [],
  "Friday": [],
  "Saturday": [],
  "Sunday": []
};

// Получаем текущую дату
let currentDate = new Date();

// Получаем текущий месяц
let currentMonth = currentDate.getMonth();

// Получаем количество дней в текущем месяце
let daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();

// Проходим по всем дням месяца и заполняем массивы событий
for (let i = 1; i <= daysInMonth; i++) {
  let date = new Date(currentDate.getFullYear(), currentMonth, i);
  let dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
  events[dayOfWeek].push({
    date: date.getDate(),
    time: "",
    place: "",
    description: ""
  });
}

// Выводим информацию о событиях по дням недели в таблицу
let eventsBody = document.getElementById("events-body");
for (let i = 0; i < 24; i++) {
  let row = document.createElement("tr");
  for (let day in events) {
    let cell = document.createElement("td");
    let event = events[day][i];
    cell.innerHTML = event.date + "<br>" + event.time + "<br>" + event.place + "<br>" + event.description;
    row.appendChild(cell);
  }
  eventsBody.appendChild(row);
}

events["Monday"][0].time = "12:00";
events["Monday"][0].place = "Кафе";
events["Monday"][0].description = "Встреча с друзьями";

let cell = document.querySelector("#events-body tr:nth-child(1) td:nth-child(1)");
cell.innerHTML = events["Monday"][0].date + "<br>" + events["Monday"][0].time + "<br>" + events["Monday"][0].place + "<br>" + events["Monday"][0].description;