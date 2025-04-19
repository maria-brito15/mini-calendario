const month = document.getElementById("month");
const dayWeek = document.getElementById("dayWeek");
const dayMonth = document.getElementById("dayMonth");
const year = document.getElementById("year");

const dateNow = new Date();

const weekOfMonth = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];

dayWeek.textContent = weekOfMonth[dataAtya]

const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

dayMonth.textContent = dateNow.getDate();
year.textContent = dateNow.getFullYear();

