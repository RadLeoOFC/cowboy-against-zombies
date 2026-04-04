var zombie = document.getElementById("zombie");
var cowboy = document.getElementById("cowboy");
var bullet = document.getElementById("bullet");

document.addEventListener("keydown", function (event) {
  shoot();
});

function shoot() {
  if (bullet.classList != "shoot") {
    bullet.classList.add("shoot");
  }
  setTimeout(function () {
    if (zombieLeft == bulletLeft) {
      bullet.classList.remove("shoot");
    }
  });
}
