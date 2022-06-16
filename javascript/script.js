let favorite = false;

//FUNCTION FOR LOAD EVERY FUNCITONS
function onload() {
  includeHTML();
  showFoodSelection();
  loadFoods();
  checkOutSection();
}

//FUNCTION FOR INCLUDING OTHER HTML SNIPPETS
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}


//FUNCTION FOR THE HEART BUTTON TOP RIGHT
function favoriteButton(){
  favorite = !favorite;
  if(favorite) {
    document.getElementById('favButton').innerHTML =`<img src="img/favorite-after-clicking.png">`;
    document.getElementById('favButton').title = "aus Favoriten löschen";
  } else {
    document.getElementById('favButton').innerHTML =`<img src="img/favorite-before-clicking.png">`;
    document.getElementById('favButton').title = "zu Favoriten hinzufügen";
  }
}

//FUNCTION FOR SHOW THE FOOD SELECTION
function showFoodSelection() {
  for (let i = 0; i < foodVariation.length; i++) {
    document.getElementById('foodSelection').innerHTML += `<span>${foodVariation[i]}<span>`;
  }
}

//FUNCTION FOR MY LITTLE EASTER EGG :)
function pizzaTime(){
  window.open("https://www.youtube.com/watch?v=TRgdA9_FsXM", "_blank");
}