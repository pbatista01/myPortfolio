const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
  openMenu(menuIcon);
});

function openMenu(menuIcon) {
  const menuList = document.querySelector(".menu-list");
  menuList.classList.toggle("menu-close");
  menuIcon.classList.toggle("open");
}


/*
  document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector(".btn-send");
  var form = document.getElementById("messageForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
  });
   
  button.addEventListener("click", function() {
    button.classList.add("onclic");
    setTimeout(function() {
      button.classList.remove("onclic");
      button.classList.add("validate");
      setTimeout(function() {
        button.classList.remove("validate");
      }, 1250);
    }, 2250);
  });
});
*/

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("messageForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
  });

  var button = document.querySelector(".btn-send");

  button.addEventListener("click", function() {
    button.classList.add("onclic");
    setTimeout(function() {
      button.classList.remove("onclic");
      button.classList.add("validate");
      setTimeout(function() {
        button.classList.remove("validate");
      }, 1500);
    }, 2500);
  });
});





