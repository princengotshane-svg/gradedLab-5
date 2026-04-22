// Student Number: 225203549
// DSW02A1---Graded Lab 5
// Question 1: Vintage Cars Guessing Game

var makes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];

var cars = [
  {
    name: "Beetle",
    type: "Cars",
    make: "VW",
    images: ["beetle.jpg"]
  },
  {
    name: "3 Series",
    type: "Cars",
    make: "BMW",
    images: ["bmw3.jpg"]
  },
  {
    name: "Cabriolet",
    type: "Cars",
    make: "Ford",
    images: ["ford.jpg"]
  },
  {
    name: "300 SL",
    type: "Cars",
    make: "Benz",
    images: ["benz.jpg"]
  },
  {
    name: "Auto Union",
    type: "Cars",
    make: "Audi",
    images: ["audi.jpg"]
  },
  {
    name: "Land Cruiser FJ40",
    type: "SUV",
    make: "Toyota",
    images: ["landcruiser.jpg"]
  },
  // This are my own additions
  {
    name: "Polo Classic",
    type: "Sedan",
    make: "VW",
    images: ["polo.jpg"]
  },
  {
    name: "Corolla KE70",
    type: "Sedan",
    make: "Toyota",
    images: ["corolla.jpg"]
  }
];

let correctCount = 0;
let totalCount = 0;
let currentCar = null;

function getRandomCar() {
  let index = Math.floor(Math.random() * cars.length);
  return cars[index];
}

function displayCar(car) {
  document.getElementById("car-name").textContent = car.name;
  document.getElementById("car-type").textContent = car.type;

  let imgEl = document.getElementById("car-img");
  imgEl.src = car.images[0];
  imgEl.classList.remove("hidden");

  currentCar = car;
}

function populateMakeList() {
  let select = document.getElementById("make-list");

  for (let i = 0; i < makes.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = makes[i];
    select.appendChild(option);
  }
}

function handleGuess() {
  let btn = document.getElementById("guess-btn");
  btn.classList.add("disabled");
  btn.disabled = true;

  let select = document.getElementById("make-list");
  let selected = select.options[select.selectedIndex].textContent;

  if (selected === currentCar.make) {
    correctCount++;
    document.getElementById("correct").textContent = correctCount;
  }

  totalCount++;
  document.getElementById("total").textContent = totalCount;

  let nextCar = getRandomCar();
  displayCar(nextCar);

  btn.classList.remove("disabled");
  btn.disabled = false;
}

window.onload = function () {
  populateMakeList();
  displayCar(getRandomCar());

  let btn = document.getElementById("guess-btn");
  btn.classList.remove("disabled");
  btn.disabled = false;

  btn.addEventListener("click", handleGuess);
};