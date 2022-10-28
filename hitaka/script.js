// for menu toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// for visibility card
var shop = document.querySelector(".shop");
var payment = document.querySelector(".payment");
shop.addEventListener("click", function(){
    payment.classList.toggle("shadow");
})

// for plus minus
var btnBuyPlus = document.getElementsByClassName("buyplus");
for (var i = 0; i < btnBuyPlus.length; i++){
    var first = btnBuyPlus[i];
    first.addEventListener("click", function(event) {
        var secend = event.target;
        var third = secend.parentElement.parentElement.parentElement.children[3].children;
        var fourth = third[0].value;
        var newvalue = parseInt(fourth) + 1;
        console.log(newvalue);
        third[0].value = newvalue
    })
}
var btnBuyMinus = document.getElementsByClassName("buyminus");
for (var i = 0; i < btnBuyMinus.length; i++){
    var first = btnBuyMinus[i];
    first.addEventListener("click", function(event) {
        var secend = event.target;
        var third = secend.parentElement.parentElement.parentElement.children[3].children;
        var fourth = third[0].value;
        if (parseInt(fourth) > 1){
        let newvalue = parseInt(fourth) - 1;
        console.log(newvalue);
        third[0].value = newvalue;
    }

    })
}
// __________________
// var btnBuyPlus = document.querySelector(".buyplus");
// var btnBuyMinus = document.querySelector(".buyminus");
// var valueinput = parseInt(document.querySelector(".numbershop").value);
// console.log(valueinput);
// btnBuyPlus.addEventListener("click", function(){
//     valueinput++;
//     document.querySelector(".numbershop").value = valueinput;
// })
// btnBuyMinus.addEventListener("click", function(){
//     if (valueinput > 1){
//     valueinput--;
// }
//     document.querySelector(".numbershop").value = valueinput;
// })




