
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

    if (e.target.id !== "maincharacterImg") {
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
    }

    /*if (e.target.id == "squareTest") {
        test1.style.opacity = 0.5;
    } else {
        test1.style.opacity = 1;
    }*/

    switch (e.target.id) {
        case "squareTest":
            test1.style.opacity = 0.5;
        case "key":
            ShowItem("rusty key", "rustyKey")
            break
        default:
            test1.style.opacity = 1;
    }


    function GetItem(itemName, itemId) {

    }

    function CheckItem() {

    }

    function ShowItem(itemName, itemId) {
        console.log("you found a" + itemName);
        const keyElement = document.createElement("li");
        keyElement.id = itemId;
        keyElement.innerText = itemName;
        inventoryList.appendChild(keyElement);
    }



}