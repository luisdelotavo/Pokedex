// Lab 1 code implementation
// Creating a list of JSON objects to iterate through
var listOfPokemon = [ {
        "id": "000",
        "name": "",
        "type": "n/a",
        "category": "n/a"
    },
    {
        "id": "#001",
        "name": "Bulbasaur" ,
        "type": "Grass/Poison",
        "category": "Seed"
    },
    {
        "id": "#002",
        "name": "Ivysaur",
        "type": "Grass/Poison",
        "category": "Seed"
    },
    {
        "id": "#003",
        "name": "Venusaur",
        "type": "Grass/Poison",
        "category": "Seed"
    },
    {
        "id": "#004",
        "name": "Charmander",
        "type": "Fire",
        "category": "Lizard"
    },
    {
        "id": "#005",
        "name": "Charmeleon",
        "type": "Fire",
        "category": "Flame"
    },
    {
        "id": "#006",
        "name": "Charizard",
        "type": "Fire/Flying",
        "category": "Flame"
    },
    {
        "id": "#007",
        "name": "Squirtle",
        "type": "Water",
        "category": "Tiny Turtle"
    },
    {
        "id": "#008",
        "name": "Wartortle",
        "type": "Water",
        "category": "Turtle"
    },
    {
        "id": "#009",
        "name": "Blastoise",
        "type": "Water",
        "category": "Shellfish"
    },
    {
        "id": "#010",
        "name": "Caterpie",
        "type": "Bug",
        "category": "Worm"
    },
    {
        "id": "#011",
        "name": "Metapod",
        "type": "Bug",
        "category": "Cocoon"
    },
    {
        "id": "#012",
        "name": "Butterfree",
        "type": "Bug/Flying",
        "category": "Butterfly"
    },
    {
        "id": "#013",
        "name": "Weedle",
        "type": "Bug/Poison",
        "category": "Hairy Bug"
    },
    {
        "id": "#014",
        "name": "Kakuna",
        "type": "Bug/Poison",
        "category": "Cocoon"
    },
    {
        "id": "#015",
        "name": "Beedrill",
        "type": "Bug/Poison",
        "category": "Poison Bee"
    },
    {
        "id": "#016",
        "name": "Pidgey",
        "type": "Normal/Flying",
        "category": "Tiny Bird"
    },
    {
        "id": "#017",
        "name": "Pidgeotto",
        "type": "Normal/Flying",
        "category": "Bird"
    },
    {
        "id": "#018",
        "name": "Pidgeot",
        "type": "Normal/Flying",
        "category": "Bird"
    },
    {
        "id": "#019",
        "name": "Rattata",
        "type": "Normal",
        "category": "Mouse"
    },
    {
        "id": "#020",
        "name": "Raticate",
        "type": "Normal",
        "category": "Mouse"
    }]


// Adding variable for user input
var numberKey = document.getElementById("searchByNumber")
var numberButton = document.getElementById("submitNumber")
var nameKey = document.getElementById("searchByName")
var nameButton = document.getElementById("submitName")


// Creating functions to search by name and to search by number
function searchFunctionNumber(){

    // Checks if the user inputs a 0
    if (Number(numberKey.value) === 0) {
        alert("Invalid: Enter a number between 1 - 20") }

    // Checks if the user inputs a number from 1 - 20
    else if (Number(numberKey.value) < 21 && Number(numberKey.value) > 0)
    {
    alert("Id: " + listOfPokemon[Number(numberKey.value)].id + 
        "\nName: " + listOfPokemon[Number(numberKey.value)].name +
        "\nType: " + listOfPokemon[Number(numberKey.value)].type +
        "\nCategory: " + listOfPokemon[Number(numberKey.value)].category)
    }
    // Checks to see if the number is not 0, or greater than 21
    else {
        alert("Invalid: Enter a number between 1 - 20")
    }
}

function searchFunctionName(){
    displayMessage = ""
    // The regEx used to validate user-input
    var regularEx = /^[a-zA-Z]{1,20}$/;
    var counterDisplay = 0;
    
    if (String(nameKey.value).toLowerCase().match(regularEx)) {
        for (let i = 0; i < listOfPokemon.length; i++) {
            // This if-statement allows for user-input to be not case-sensitive
            if ((listOfPokemon[i].name.toLowerCase().includes(String(nameKey.value)) && counterDisplay < 5) || (listOfPokemon[i].name.includes(String(nameKey.value)) && counterDisplay < 5)) {

                displayMessage += "Id: " + listOfPokemon[i].id + 
                "\nName: " + listOfPokemon[i].name +
                "\nType: " + listOfPokemon[i].type +
                "\nCategory: " + listOfPokemon[i].category +
                "\n\n";

                // Counter allows for up to 5 possible matches
                counterDisplay += 1;
            }
        }

        // If the length of the message is 0 this means there are no matches
        if(displayMessage.length === 0) {
            alert("Invalid: No searches found")
        }
        // Displays the message if there is a match
        else {
            alert(displayMessage)
        }
    }
    // If regEx does not match, this alert message will pop up
    else {
        alert("Invalid: Enter only alphabet characters (case insensitive) and must no more than 20 characters")
    } 
}

// Adding event listener
numberButton.addEventListener("click",searchFunctionNumber);
nameButton.addEventListener("click",searchFunctionName);

// Lab 2 code implementation             
// This function is used to clear the div whenever a button is pressed
function clearListItem(){
    // To grab any element with the div-dynamic2 Id
    var checkingDiv = document.getElementById("div-dynamic2")
    // If there is that div, remove it
    if(checkingDiv){
        checkingDiv.remove()
}}

// This function is used to fix the error of backspacing and it will still leave the div, for the number
function checkNumberValue(){
    // Checks to see whether the user input is empty (number) and removes the div
    if(numberKey.value == ""){
        var checkingDiv = document.getElementById("div-dynamic2")
        checkingDiv.remove()
    }
}

// This function is used to fix the error of backspacing and it will still leave the div, for the name
function checkNameValue(){
    // Checks to see whether the user input is empty (name) and removes the div
    if(nameKey.value == ""){
        var checkingDiv = document.getElementById("div-dynamic2")
        checkingDiv.remove()
    }
}

// This function is used to search dynamically with the number search bar
function searchDynamicNumber(){
    clearListItem()
    
    // Creating a div tag and an unordered list tag within it, appending it
    var divTag = document.createElement("div")
    divTag.setAttribute("class","div-dynamic")
    divTag.setAttribute("id","div-dynamic2")
    var unorderedListTag = document.createElement("ul")
    divTag.appendChild(unorderedListTag)
    // Inserting the div into HTML before the pokemon-cards
    var firstDiv = document.getElementById("pokemonCards")
    document.body.insertBefore(divTag,firstDiv)   

    // Grabbing the search bar value
    numberValue = Number(numberKey.value)

    if (numberValue < 21 && numberValue > 0)
    {
        // Creating a list element and appending it to unordered list
        var pokemonElement = document.createElement("li")
        pokemonElement.setAttribute("class","dynamic")
        unorderedListTag.appendChild(pokemonElement)
        // Creating a div element and appending it to list element
        var pokemonDiv = document.createElement("div")
        pokemonElement.appendChild(pokemonDiv)
        // Creating an img element and appending it to div element
        var pokemonImage = document.createElement("img")
        var pokemonImageSource = "assets\\pokemon\\" + String(numberValue) + ".png"
        pokemonDiv.append(pokemonImage)
        pokemonImage.src = pokemonImageSource

        // Creating a <br> element
        var br = document.createElement("br")
        var br1 = document.createElement("br")
        var br2 = document.createElement("br")
        // Appending the description
        pokemonDiv.append("Id: " + listOfPokemon[numberValue].id)
        pokemonDiv.append(br)
        pokemonDiv.append("Name: " + listOfPokemon[numberValue].name)
        pokemonDiv.append(br1)
        pokemonDiv.append("Type: " + listOfPokemon[numberValue].type)
        pokemonDiv.append(br2)
        pokemonDiv.append("Category: " + listOfPokemon[numberValue].category)
    }
    checkNumberValue()
}

// This function is used to search dynamically with the name search bar
function searchDynamicName(){
    clearListItem()

    // Creating a div tag and an unordered list tag within it, appending it
    var divTag = document.createElement("div")
    divTag.setAttribute("class","div-dynamic")
    divTag.setAttribute("id","div-dynamic2")
    var unorderedListTag = document.createElement("ul")
    divTag.appendChild(unorderedListTag)
    // Inserting the div into HTML before the pokemon-cards
    var firstDiv = document.getElementById("pokemonCards")
    document.body.insertBefore(divTag,firstDiv)   

    nameValue = String(nameKey.value)

    // Iterates through the array created in Lab 1
    for (let i = 0; i < listOfPokemon.length; i++) {

        // Checks to see whether the input is included in the name value of each array item
        if ((listOfPokemon[i].name.toLowerCase().includes(nameValue) && nameValue != "") || (listOfPokemon[i].name.includes(nameValue)&& nameValue!= "")) {

        // Creating a list element and appending it to unordered list
        var pokemonElement = document.createElement("li")
        pokemonElement.setAttribute("class","dynamic")
        unorderedListTag.appendChild(pokemonElement)
        // Creating a div element and appending it to list element
        var pokemonDiv = document.createElement("div")
        pokemonElement.appendChild(pokemonDiv)
        // Creating an img element and appending it to div element
        var pokemonImage = document.createElement("img")
        var pokemonImageSource = "assets\\pokemon\\" + i + ".png"
        pokemonDiv.append(pokemonImage)
        pokemonImage.src = pokemonImageSource

        // Creating a <br> element
        var br = document.createElement("br")
        var br1 = document.createElement("br")
        var br2 = document.createElement("br")
        // Appending the description
        pokemonDiv.append("Id: " + listOfPokemon[i].id)
        pokemonDiv.append(br)
        pokemonDiv.append("Name: " + listOfPokemon[i].name)
        pokemonDiv.append(br1)
        pokemonDiv.append("Type: " + listOfPokemon[i].type)
        pokemonDiv.append(br2)
        pokemonDiv.append("Category: " + listOfPokemon[i].category)
        }
}
    checkNameValue()
}

