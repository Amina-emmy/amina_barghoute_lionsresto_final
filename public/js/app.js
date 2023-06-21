//* drop down
let dropdownBtn = document.getElementById("btnD");
let dropdownMenu = document.getElementById("myDropdown");
let toggleArrow = document.getElementById("arrow");

let dropdownBtn2 = document.getElementById("btnD2");
let dropdownMenu2 = document.getElementById("myDropdown2");
let toggleArrow2= document.getElementById("arrow2");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
  };
  const toggleDropdown2 = function () {
    dropdownMenu2.classList.toggle("show");
    toggleArrow2.classList.toggle("arrow");
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
    }else if (dropdownMenu2.classList.contains("show")) {
        toggleDropdown2(); 
    }
  });