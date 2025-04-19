const month = document.getElementById("month");
const dayWeek = document.getElementById("dayWeek");
const dayMonth = document.getElementById("dayMonth");
const year = document.getElementById("year");

const dateNow = new Date();

const weekOfMonth = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

dayWeek.textContent = weekOfMonth[dateNow.getDay()]

const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

month.textContent = monthsOfYear[dateNow.getMonth()]

dayMonth.textContent = dateNow.getDate();
year.textContent = dateNow.getFullYear();

