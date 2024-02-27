
document.getElementById("mainTitle").innerText = "point and click adventure game";

// Game State
let gameState = {
    "inventory": [],
    "coinPickedUp": false
}
runGame();
function runGame() {
    //inventory
    const gameWindow = document.getElementById("gameWindow");
    const inventoryList = document.getElementById("inventoryList")

    //main character
    const mainCharacter = document.getElementById("maincharacter")
    const offsetCharacter = 16;

    const test1 = document.getElementById("squareTest");


    //inventory
    //const inventoryList = document.getElementById("inventoryBox")


    gameWindow.onclick = function (e) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        //console.log("x is " + x + " and y is " + y);

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
            case "key":
                console.log("pick up key")
                document.getElementById("key").remove();
                changeInventory('key', "add");
                break;
            case "well":
                if (gameState.coinPickedUp == false) {
                    changeInventory("coin", "add");
                    gameState.coinPickedUp = true;
                } else {
                    console.log("There are no more coins in this well!");
                }
                break;
            case "doorWizardHut":
                if (checkItem("key")) {
                    console.log("I opened the door. Yeah!");
                } else if (checkItem("coin")) {
                    changeInventory("coin", "remove");
                    console.log("Oh no I lost the coin and it didn't open the door.. Feel kinda stupid..");
                } else {
                    console.log("Fuck this door is locked and I don't have a key. boohoo :(");
                }
                break;
            case "statue":
                console.log("hey you.. wanna know where the key is? It's by the graves.");
                break;
            default:
                break;
        }
    }

    /**
     * 
     * @param {string} itemName 
     * @param {string} action 
     */


    function changeInventory(itemName, action) {
        if (itemName == null || action == null) {
            console.error("Wrong parameters given to changeInventory()");
            return;
        }

        switch (action) {
            case 'add':
                gameState.inventory.push(itemName);
                break;
            case 'remove':
                gameState.inventory = gameState.inventory.filter(function (newInventory) {
                    return newInventory !== itemName;
                });
                document.getElementById("inv-" + itemName).remove();
                break;

        }
        updateInventory(gameState.inventory, inventoryList);
    }

    /**
     * 
     * @param {string} itemName 
     */

    function CheckItem(itemName) {
        return gameState.inventory.includes(itemName);
    }

    function updateInventory(inventory, inventoryList) {
        inventoryList.innerHTML = '';
        inventory.forEach(function (item) {
            const inventoryItem = document.createElement("li");
            inventoryItem.id = 'inv-' + item;
            inventoryItem.innerText = item;
            inventoryList.appendChild(inventoryItem);
        })
    }


}