
document.getElementById("mainTitle").innerText = "point and click adventure game";

const gameWindow = document.getElementById("gameWindow");

const mainCharacter = document.getElementById("maincharacter")
const offsetCharacter = 16;

const test1 = document.getElementById("squareTest");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log("x is " + x + " and y is " + y);

    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    if (e.target.id == "squareTest") {
        test1.style.opacity = 0.9;
    } else {
        test1.style.opacity = 1;
    }


}