/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = `Fernando Mendez`; 

const currentYear = new Date().getFullYear();

const profilePicture = 'images/fernando.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent += currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', 'Profile image of Fernando Mendez');

/* Step 5 - Array */

let favoriteFoods = ["Pasticho", " Pizza", "Ice Cream", "Cholate Cake "];

foodElement.textContent = favoriteFoods.join(", ");

const newFood = "Fries";

favoriteFoods.push(newFood);

foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;