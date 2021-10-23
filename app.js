// Create Dino Constructor
function Dino(dinoObj) {
  const { species, weight, height, diet, where, when, fact } = dinoObj;
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// Create Dino Objects

const triceratops = new Dino({
  species: "Triceratops",
  weight: 13000,
  height: 114,
  diet: "herbavor",
  where: "North America",
  when: "Late Cretaceous",
  fact: "First discovered in 1889 by Othniel Charles Marsh"
});

const tyrannosaurusRex = new Dino({
  species: "Tyrannosaurus Rex",
  weight: 11905,
  height: 144,
  diet: "carnivor",
  where: "North America",
  when: "Late Cretaceous",
  fact: "The largest known skull measures in at 5 feet long."
});

const anklyosaurus = new Dino({
  species: "Anklyosaurus",
  weight: 10500,
  height: 55,
  diet: "herbavor",
  where: "North America",
  when: "Late Cretaceous",
  fact: "Anklyosaurus survived for approximately 135 million years."
});

const brachiosaurus = new Dino({
  species: "Brachiosaurus",
  weight: 70000,
  height: "372",
  diet: "herbavor",
  where: "North America",
  when: "Late Jurasic",
  fact: "An asteroid was named 9954 Brachiosaurus in 1991."
});

const stegosaurus = new Dino({
  species: "Stegosaurus",
  weight: 11600,
  height: 79,
  diet: "herbavor",
  where: "North America, Europe, Asia",
  when: "Late Jurasic to Early Cretaceous",
  fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines."
});

const elasmosaurus = new Dino({
  species: "Elasmosaurus",
  weight: 16000,
  height: 59,
  diet: "carnivor",
  where: "North America",
  when: "Late Cretaceous",
  fact: "Elasmosaurus was a marine reptile first discovered in Kansas."
});

const pteranodon = new Dino({
  species: "Pteranodon",
  weight: 44,
  height: 20,
  diet: "carnivor",
  where: "North America",
  when: "Late Cretaceous",
  fact: "Actually a flying reptile, the Pteranodon is not a dinosaur."
});

const pigeon = new Dino({
  species: "Pigeon",
  weight: 0.5,
  height: 9,
  diet: "herbavor",
  where: "World Wide",
  when: "Holocene",
  fact: "All birds are living dinosaurs."
});

const dinos = [
  triceratops,
  tyrannosaurusRex,
  anklyosaurus,
  brachiosaurus,
  stegosaurus,
  elasmosaurus,
  pteranodon,
  pigeon
];
console.log("INI DINOS", dinos);

// Create Human Object

function Human(data) {
  const { name, feet, inches, weight, diet } = data;
  this.name = name;
  this.feet = feet;
  this.inches = inches;
  this.weight = weight;
  this.diet = diet;
}

const createHuman = function(data) {
  return new Human(data);
};

// Use IIFE to get human data from form

let human = () =>
  (function() {
    let data = {
      name: document.getElementById("name").value,
      feet: Number(document.getElementById("feet").value),
      inches: Number(document.getElementById("inches").value),
      weight: Number(document.getElementById("weight").value),
      diet: document.getElementById("diet").value
    };

    return data;
  })();

let humanObj = {};

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function() {
  console.log(this.weight, humanObj.weight);
  if (this.weight > humanObj.weight) {
    return `${this.species} was ${this.weight -
      humanObj.weight} lbs heavier than you!`;
  } else if (this.weight < humanObj.weight) {
    return `You were ${humanObj.weight - this.weight} lbs heaver than ${
      this.species
    }.`;
  } else if (this.weight === humanObj.weight) {
    return `You have same weight with ${this.species}.`;
  }
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array
let tileObjects = [];

const generateTiles = () => {
  dinos.forEach(dinoObj => {
    const dinoTile = document.createElement("div");
    dinoTile.className = "grid-item";
    dinoTile.innerHTML = `
        <h3>${dinoObj.species}</h3>
        <img src='./images/${dinoObj.species.toLowerCase()}.png' />
        <p>${dinoObj.compareWeight()}
        `;
    tileObjects.push(dinoTile);
  });
};

const generateHumanTile = () => {
  console.log("This is humanObj", humanObj);

  const humanTile = document.createElement("div");
  humanTile.className = "grid-item";
  humanTile.innerHTML = `
    <h3>${humanObj.name}</h3>
    <img src='./images/human.png' />
  `;
  //   tileObjects.push(humanTile);
  tileObjects.splice(4, 0, humanTile);
};

// Add tiles to DOM
const addTilesToDOM = () => {
  console.log("THIS IS tileObjects", tileObjects);
  const gridNode = document.getElementById("grid");
  tileObjects.forEach(tileObj => {
    gridNode.appendChild(tileObj);
  });
};

// Remove form from screen

const hideForm = () => {
  document.getElementById("dino-compare").style.display = "none";
};

// On button click, prepare and display infographic
const formElement = document.getElementById("dino-compare");
const formName = "human-form";
formElement.name = formName;

const button = document.getElementById("btn");
button.addEventListener("click", function() {
  const form = document.forms[formName];
  const name = form.name.value.trim();
  const feet = form.feet.value.trim();
  const inches = form.inches.value.trim();
  const weight = form.weight.value.trim();
  const diet = form.diet.value.trim();

  if (!name || !feet || !inches || !weight || !diet) {
    return alert("Please to complete form!");
  }

  humanObj = createHuman(human());

  hideForm();
  generateTiles();
  generateHumanTile();
  addTilesToDOM();
});
