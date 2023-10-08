/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Fernando Mendez",
    photo: "/images/fernando.png",
    favoriteFoods: [
        "Pizza",
        "Fries",
        "Sushi"
    ],
    hobbies: [
        "Programming",
        "Reading",
        "Writting"
    ],
    placesLived: [

    ]
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Turmero",
        length: "23 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Caracas",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
let dl = document.querySelector("#places-lived");

myProfile.placesLived.forEach(function(i) {
  let dt = document.createElement("dt");
  dt.textContent = i.place;

  let dd = document.createElement("dd");
  dd.textContent = i.length;

  dl.appendChild(dt);
  dl.appendChild(dd);
});
