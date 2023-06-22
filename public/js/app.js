//* drop down
let dropdownBtn = document.getElementById("btnD");
let dropdownMenu = document.getElementById("myDropdown");
let toggleArrow = document.getElementById("arrow");

let dropdownBtn2 = document.getElementById("btnD2");
let dropdownMenu2 = document.getElementById("myDropdown2");
let toggleArrow2 = document.getElementById("arrow2");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};
const toggleDropdown2 = function () {
    dropdownMenu2.classList.toggle("show");
    toggleArrow2.classList.toggle("arrow2");
};

dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});
dropdownBtn2.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown2();
});
document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
    } else if (dropdownMenu2.classList.contains("show")) {
        toggleDropdown2();
    }
});

//* menu Burger
let btn_burger = document.querySelector("#logoBurger");
function menuBurger() {
    let x = document.querySelector(".linksBurger");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
btn_burger.addEventListener("click", menuBurger)

//todo section 1 : Hero -----------------------------------------------------------------------------------------------------------

// todo section 2 : ABOUT US ----------------------------------------------------------------->

// todo section 3 : Menu ----------------------------------------------------------------->
let menu_btns=document.querySelectorAll(".btnMenu");
for (let b = 0; b < menu_btns.length; b++) {
    let btnM = menu_btns[b];
    btnM.addEventListener("click",()=>{
        //if id btn==id divmenu add class sinon remove it
        btnM.classList.add("borderColor");
    })
    
}