// for menu toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// for visibility card
var shop = document.querySelectorAll(".shop");
for (var i = 0; i < shop.length; i++) {
    var firstt = shop[i];
    firstt.addEventListener("click", function (e) {
        var secendd = e.target;
        var thirdd = secendd.parentElement.parentElement.parentElement.parentElement.parentElement.children[3].classList.toggle("shadow");
        console.log(thirdd);


    })
}

// for plus minus
var btnBuyPlus = document.getElementsByClassName("buyplus");
for (var i = 0; i < btnBuyPlus.length; i++) {
    var first = btnBuyPlus[i];
    first.addEventListener("click", function (event) {
        var secend = event.target;
        var third = secend.parentElement.parentElement.parentElement.children[3].children;
        var fourth = third[0].value;
        var newvalue = parseInt(fourth) + 1;
        console.log(newvalue);
        third[0].value = newvalue;
    })
}
var btnBuyMinus = document.getElementsByClassName("buyminus");
for (var i = 0; i < btnBuyMinus.length; i++) {
    var first = btnBuyMinus[i];
    first.addEventListener("click", function (event) {
        var secend = event.target;
        var third = secend.parentElement.parentElement.parentElement.children[3].children;
        var fourth = third[0].value;
        if (parseInt(fourth) > 1) {
            let newvalue = parseInt(fourth) - 1;
            console.log(newvalue);
            third[0].value = newvalue;
        }

    })
}
//if chose one hide other __________________
document.querySelector(".A1").addEventListener("click", function () {
    document.querySelector("body > div.mother > div.card1 ").style.display = "flex";
    document.querySelector("body > div.mother > div.card2 ").style.display = "none";
    document.querySelector("body > div.mother > div.card3 ").style.display = "none";
})
document.querySelector(".A2").addEventListener("click", function () {
    document.querySelector("body > div.mother > div.card1 ").style.display = "none";
    document.querySelector("body > div.mother > div.card2 ").style.display = "flex";
    document.querySelector("body > div.mother > div.card3 ").style.display = "none";
})
document.querySelector(".A3").addEventListener("click", function () {
    document.querySelector("body > div.mother > div.card1 ").style.display = "none";
    document.querySelector("body > div.mother > div.card2 ").style.display = "none";
    document.querySelector("body > div.mother > div.card3 ").style.display = "flex";
})
// for show all
document.querySelector(".A4").addEventListener("click", function () {
    document.querySelector("body > div.mother > div.card1 ").style.display = "flex";
    document.querySelector("body > div.mother > div.card2 ").style.display = "flex";
    document.querySelector("body > div.mother > div.card3 ").style.display = "flex";
})
// add cart
// var addItemId = 0
// function addToCart(item) {
//     var selectedItem = document.createComment('div');
//     selectedItem.classList.add('cartImg');
//     console.log(selectedItem)
//     selectedItem.setAttribute('id', addItemId);
//     var img = document.createElement('img');
//     img.setAttribute('src', item.parentElement.parentElement.parentElement.parentElement.children[0].children[0].currentSrc);
//     console.log(amine);

//     var cartItem = document.getElementById('title');
//     selectedItem.append(img);
//     cartItem.append(selectedItem);

// }




