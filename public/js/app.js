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
btn_burger.addEventListener("click", menuBurger);

//* modal
let btn_open = document.querySelectorAll(".open");
let div_modal = document.querySelectorAll(".myModal");
let x = document.querySelectorAll(".close");
let myBody=document.body;

const open_modal = (divMd) => {
    divMd.classList.remove("dis-none"); //delete class{display: none;} pour rendre myModal on display block
    myBody.classList.add("body-while-modalOpen");
}
const close_modal = (divMd) => {
    divMd.classList.add("dis-none"); //add class{display: none;} pour rendre myModal on display none
    myBody.classList.remove("body-while-modalOpen");
}

for (let index = 0; index < btn_open.length; index++) {
    let btnE_open = btn_open[index];
    let id_btnE_open=btnE_open.getAttribute("id");

    for (let idx = 0; idx < div_modal.length; idx++) {
        let divE = div_modal[idx];
        let id_divE=divE.getAttribute("id");

        if (id_divE==id_btnE_open) {
            btn_open[index].addEventListener("click",()=>{
                open_modal(div_modal[idx]);
            });
        }
        for (let i = 0; i < x.length; i++) {
            let x_close = x[i];
            let id_x=x_close.getAttribute("id");

            if (id_x==id_divE) {
                x[i].addEventListener("click",()=>{
                    close_modal(div_modal[idx]);
                });
            } 
        }
    } 
}

//todo section 1 : Hero -----------------------------------------------------------------------------------------------------------

// todo section 2 : ABOUT US ----------------------------------------------------------------->

// todo section 3 : Menu ----------------------------------------------------------------->

let menu_btns = document.querySelectorAll(".btnMenu");

let div_starters = document.querySelector("#starters");
let div_startersId=div_starters.getAttribute("id");

let div_breakie = document.querySelector("#breakie");
let div_breakieId=div_breakie.getAttribute("id");

let div_lunch = document.querySelector("#lunch");
let div_lunchId=div_lunch.getAttribute("id");

let div_dinner = document.querySelector("#dinner");
let div_dinnerId=div_dinner.getAttribute("id");

for (let b = 0; b < menu_btns.length; b++) {
    let btnM = menu_btns[b];
    let btnM_id = btnM.getAttribute("id");
    btnM.addEventListener("click", () => {
        //if id btn==id divmenu add class sinon remove it
        //! needs fixing
        switch (btnM_id) {
            case div_startersId:
                // div_starters.classList.remove("d-none");
                // div_breakie.classList.add("d-none");
                // div_lunch.classList.add("d-none");
                // div_dinner.classList.add("d-none");

                btnM.classList.add("borderColor");
                menu_btns[1].classList.remove("borderColor");
                menu_btns[2].classList.remove("borderColor");
                menu_btns[3].classList.remove("borderColor");
                break;
            case div_breakieId:
                // div_starters.classList.add("d-none");
                // div_breakie.classList.remove("d-none");
                // div_lunch.classList.add("d-none");
                // div_dinner.classList.add("d-none");

                btnM.classList.add("borderColor");
                menu_btns[0].classList.remove("borderColor");
                menu_btns[2].classList.remove("borderColor");
                menu_btns[3].classList.remove("borderColor");
                break;
            case div_lunchId:
                // div_starters.classList.add("d-none");
                // div_breakie.classList.add("d-none");
                // div_lunch.classList.remove("d-none");
                // div_dinner.classList.add("d-none");

                menu_btns[2].classList.add("borderColor");
                menu_btns[0].classList.remove("borderColor");
                menu_btns[1].classList.remove("borderColor");
                menu_btns[3].classList.remove("borderColor");
                break;
            case div_dinnerId:
                // div_starters.classList.add("d-none");
                // div_breakie.classList.add("d-none");
                // div_lunch.classList.add("d-none");
                // div_dinner.classList.remove("d-none");

                btnM.classList.add("borderColor");
                menu_btns[0].classList.remove("borderColor");
                menu_btns[2].classList.remove("borderColor");
                menu_btns[1].classList.remove("borderColor");
                break;
        }
    })

}
// todo section 4 : Events ----------------------------------------------------------------->

// todo section 5 : Chefs --------------------------------------------------------------------------------------------------->

// todo section 6 : Book a Table --------------------------------------------------------------------------------------------------->

// todo section 7 : Gallery --------------------------------------------------------------------------------------------------->

// todo section 8 : Contact --------------------------------------------------------------------------------------------------->