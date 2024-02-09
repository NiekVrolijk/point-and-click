
document.getElementById("mainTitle").innerText = "point and click adventure game";

const gameWindow = document.getElementById("gameWindow");

const mainCharacter = document.getElementById("maincharacter")
const offsetCharacter = 16;

const test1 = document.getElementById("squareTest");

//inventory
const inventoryList = document.getElementById("inventoryBox")

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log("x is " + x + " and y is " + y);

    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    /*if (e.target.id == "squareTest") {
        test1.style.opacity = 0.5;
    } else {
        test1.style.opacity = 1;
    }*/

    switch (e.target.id) {
        case "squareTest":
            test1.style.opacity = 0.5;
        case "key":
            console.log("you found key");
            document.getElementById("key").remove();
            //inventoryList.appendChild('<li id="inv-key><li>');
            break
        default:
            test1.style.opacity = 1;
    }


}