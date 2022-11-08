const cancellation = "It is a pity that you did not want to enter yours";

const age = prompt("What is your birth year?");

const city = prompt("What city do you live in?");

const sport = prompt("What is your favorite sport?");

let result = "";
if (!age || !Number(age)) {
  result += `${cancellation} birth year :(`;
} else {
  result += 2022 - Number(age);
}
result += "\n";
if (!city) {
  result += `${cancellation} city :(`;
} else if (city === "London" || city === "Лондон") {
  result +=
    "You live in the capital of - " +
    "The United Kingdom of Great Britain and Northern Ireland";
} else if (city === "Kyiv" || city === "Київ") {
  result += "You live in the capital of - " + "Ukraine";
} else if (city === "Washington" || city === "Вашингтон") {
  result += "You live in the capital of - " + "The United States of America";
} else {
  result += "You live in the city - " + city;
}

result += "\n";
if (!sport) {
  result += `${cancellation} favorite sport :(`;
} else if (sport === "Golf" || sport === "Гольф") {
  result += "Cool! Do you want to become a champion - " + "Tiger Woods?";
} else if (sport === "Tennis" || sport === "Теніс") {
  result +=
    "Cool! Do you want to become a champion - " + "Serena Jameka Williams?";
} else if (sport === "Karate" || sport === "Карате") {
  result += "Cool! Do you want to become a champion - " + "Rafal Agaev?";
} else {
  result += sport + " - excellent choice!";
}

alert(result);
