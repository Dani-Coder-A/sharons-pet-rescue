const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//Create Factory Function, Add Parameters
const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    //Create Method for Sleep
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    //Create Method for Playtime
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

//Create 5 New Objects
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//Verify Objects and Methods
//console.log(sora, clover, baxter, cleo, francine);
//clover.sleep();
//baxter.play();

//console.log(clover, baxter);

//Update Properties & Create Array of Objects
clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

//Display Pets in the Browser
const showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

//Add Click Event
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
