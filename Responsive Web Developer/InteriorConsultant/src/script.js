const menuCheckbox = document.getElementById("menu_checkbox");
const headerList = document.getElementById("headerList");
const card = document.getElementById("mycard");

function toggleHeaderListVisibility() {
  if (menuCheckbox.checked && window.innerWidth <= 768) {
    headerList.style.display = "relative";
    card.style.display = "none";
  } 

  else if(!menuCheckbox.checked && window.innerWidth > 768){
    headerList.style.display = "flex";

  }
  else {
    headerList.style.display = "none";
    card.style.display = "grid";
  }
}

menuCheckbox.addEventListener("change", toggleHeaderListVisibility);

window.addEventListener("resize", toggleHeaderListVisibility);

toggleHeaderListVisibility();
