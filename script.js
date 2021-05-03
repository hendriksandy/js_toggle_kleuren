const hamburgermenu = document.querySelector("#menu")
const kleurenmenu = document.querySelector("#nav")
const bodychange = document.querySelector(".top")
const kleurrood = document.querySelector(".red")
const kleuroranje = document.querySelector(".orange")
const kleurpaars = document.querySelector(".purple")
const kleurgreen = document.querySelector(".green")
const kleurhome = document.querySelector(".home")


hamburgermenu.addEventListener("click", function () {
    kleurenmenu.classList.toggle("change")
});

// hamburgermenu.addEventListener("mouseenter", function () {
//     kleurenmenu.classList.toggle("change")
// });
// hamburgermenu.addEventListener("mouseout", function () {
//     kleurenmenu.classList.remove("change")
// });



kleurrood.addEventListener("click", function () {
    bodychange.classList.remove("home", "orange", "purple", "green", "red");
    kleurenmenu.classList.remove("change")
    bodychange.classList.add("red");

});
kleuroranje.addEventListener("click", function () {
    bodychange.classList.remove("home", "orange", "purple", "green", "red");
    kleurenmenu.classList.remove("change")
    bodychange.classList.add("orange");

});
kleurpaars.addEventListener("click", function () {
    bodychange.classList.remove("home", "orange", "purple", "green", "red");
    kleurenmenu.classList.remove("change")
    bodychange.classList.add("purple");

});
kleurgreen.addEventListener("click", function () {
    bodychange.classList.remove("home", "orange", "purple", "green", "red");
    kleurenmenu.classList.remove("change")
    bodychange.classList.add("green");

});
kleurhome.addEventListener("click", function () {
    bodychange.classList.remove("home", "orange", "purple", "green", "red");
    kleurenmenu.classList.remove("change")
    bodychange.classList.add("home");

});