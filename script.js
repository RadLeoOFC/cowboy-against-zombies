const zombie = document.getElementById("zombie");
const cowboy = document.getElementById("cowboy");
const bullet = document.getElementById("bullet");

const zombiePosition = zombie.getBoundingClientRect();
const cowboyPosition = cowboy.getBoundingClientRect();
const bulletPosition = bullet.getBoundingClientRect();

const zombieLeft = zombiePosition.left;
const bulletLeft = bulletPosition.left;
const cowboyLeft = cowboyPosition.left;

document.addEventListener("keydown", function (event) {
  shoot();
});

function zombieKilled(zombieLeft, bulletLeft) {
  return zombieLeft === bulletLeft;
}

function cowboyKilled(zombieLeft, cowboyLeft) {
  return zombieLeft === cowboyLeft;
}

function shoot() {
  if (bullet.classList != "shoot") {
    bullet.classList.add("shoot");
  }
  setTimeout(function () {
    if (zombieKilled) {
      alert("YOU WON");
      bullet.classList.remove("shoot");
    } else if (cowboyKilled) {
      alert("YOU LOST");
    }
  });
}
