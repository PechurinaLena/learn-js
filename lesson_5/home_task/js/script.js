let menu = document.getElementsByClassName("menu")[0];
let menuItem = document.getElementsByClassName("menu-item");
let menuItemLi = document.createElement("li");
let promptforApple = document.querySelector("#prompt");

let adv = document.getElementsByClassName("adv")[0];
adv.remove();

menuItemLi.classList.add("menu-item"); // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);

menu.insertBefore(menuItem[2], menuItem[1]);


document.body.style.backgroundImage = "url('img/apple_true.jpg')";

document.getElementById('title').innerHTML = "Мы продаем только подлинную технику Apple";

let yourOpinion = prompt("Ваше отношение к технике Apple?"); // Отношение к технике Apple
promptforApple.textContent = yourOpinion;