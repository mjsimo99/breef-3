// for menu toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})


//if chose one hide other __________________
document.querySelector(".A1").addEventListener("click", function () {
    document.querySelector("body > div.grandM > div.mother > div.card1 ").style.display = "flex";
    document.querySelector("body > div.grandM > div.mother > div.card2 ").style.display = "none";
    document.querySelector("body > div.grandM > div.mother > div.card3 ").style.display = "none";
})
document.querySelector(".A2").addEventListener("click", function () {
    document.querySelector("body > div.grandM > div.mother > div.card1 ").style.display = "none";
    document.querySelector("body > div.grandM > div.mother > div.card2 ").style.display = "flex";
    document.querySelector("body > div.grandM > div.mother > div.card3 ").style.display = "none";
})
document.querySelector(".A3").addEventListener("click", function () {
    document.querySelector("body > div.grandM > div.mother > div.card1 ").style.display = "none";
    document.querySelector("body > div.grandM > div.mother > div.card2 ").style.display = "none";
    document.querySelector("body > div.grandM > div.mother > div.card3 ").style.display = "flex";
})
// for show all
document.querySelector(".A4").addEventListener("click", function () {
    document.querySelector("body > div.grandM > div.mother > div.card1 ").style.display = "flex";
    document.querySelector("body > div.grandM > div.mother > div.card2 ").style.display = "flex";
    document.querySelector("body > div.grandM > div.mother > div.card3 ").style.display = "flex";
})
// for cards

var total = 0;
var i = 1;
// Message 
var message = "Please select a size";
// List of the amount of every product in the cart
var itemCost = [];
//
// Add to cart
function add(n) {
    sizeId = "size" + n;
    console.log(sizeId);
    messageId = "message" + n;
    console.log(messageId);
    // The size of the selected card
    size = document.getElementById(sizeId).value;
    console.log(size);
    // message show
    if (size === "size") {
        document.getElementById(messageId).innerHTML = message;
        return 0;

    }
    //select card name price quantity 
    brand = "brand" + n;
    priceId = "price" + n;
    quantityId = "quantity" + n;
    // brand name
    name = document.getElementById(brand).innerHTML;
    console.log(name);
    // price
    price = document.getElementById(priceId).innerHTML;
    console.log(price);
    // quantity
    quantity = document.getElementById(quantityId).value;
    console.log(quantity);

    // Creat balise li  
    var node = document.createElement("li");
    // creat id li
    item = "item" + i;
    node.setAttribute("id", item);
    // calcul price * quantity
    itemCost[i - 1] = Number(price) * Number(quantity);
    console.log(itemCost[i - 1]);

    i += 1;
    console.log(i);
    // text for cart
    var textnode = document.createTextNode(name + " " + quantity + " x " + price + " $, size: " + size);
    // add the text to li
    node.appendChild(textnode);
    // add li element to ul list
    document.getElementById("items").appendChild(node);

    total += Number(price) * Number(quantity);
    console.log(total);
    // update the total
    document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " $";

    // remove button 
    document.getElementById(item).innerHTML += '<button class="buttonbuyitem" onclick="deleItem(' + "'" + item + "'" + ')">x</button>';
}

// delete message 
function deleteE(eId) {
    document.getElementById(eId).innerHTML = ' ';
    console.log(document.getElementById(eId).innerHTML);
}

// Remove a product from the cart
function deleItem(eId) {
    document.getElementById(eId).remove();
    n = Number(eId.slice(-1)) - 1;
    console.log(n);
    total -= itemCost[n];
    console.log(total);
    document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " $";
}








        // ______________________________________







































