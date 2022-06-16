let foodVariation = ['Pizza', 'Pasta', 'Gnocchi', 'Tortelinni', 'Salate', 'Getränke', 'Desserts'];

let favHeadline = ['Pizza Tonno', 'Pizza Salami', 'Penne'];
let favDescription = ['Tomatensauce, Mozzarella, Thunfisch, Zwiebeln', 'Tomatensauce, Mozzarella, Salami', 'mit einer Sauce nach Wahl'];
let favPrice = [13.90, 12.00, 10.00];

let pizzaHeadline = ['Pizza Funghi', 'Pizza Margehrita', 'Pizza Salami', 'Pizza Sucuk', 'Pizza Tonno'];
let pizzaDescription = ['Tomatensauce, Mozzarella, Pilze', 'Tomatensauce, Mozzarella', 'Tomatensauce, Mozzarella, Salami', 'Tomatensauce, Mozzarella, türkische Knoblauchwurst', 'Tomatensauce, Mozzarella, Thunfisch, Zwiebeln'];
let pizzaPrice = [13.00, 11.00, 13.00, 13.00, 13.00];

let pastaHeadline = ['Aglio e olio', 'Carbonara', 'Napoli', 'Penne', 'Spaghetti',];
let pastaDescription = ['Knoblauch, Olivenöl - mit einer Sauce nach Wahl', 'Spiegelei, Putenschinken - Sahnesauce', 'mit einer Sauce nach Wahl', 'mit einer Sauce nach Wahl', 'mit einer Sauce nach Wahl'];
let pastaPrice = [16.00, 16.00, 15.00, 15.00, 15.00];

let saladHeadline = ['Gemischter Salat', 'Salat Chef', 'Salat Free Style', 'Salat Lupo', 'Wunsch-Salat'];
let saladDescription = ['mit Mais, Zwiebeln, Paprika und Krautsalat', 'mit gebratenem Hähnchenfleisch, gebratenen Champignons, Paprika und Mais', 'mit Mais, Thunfisch, Ei und Oliven', 'mit Thunfisch, Gouda, Paprika und milden Peperonis', 'mit Zutaten nach Wahl'];
let saladPrice = [9.00, 9.50, 9.50, 9.00, 5.00];

let drinkHeadline = ['Kolla', 'Venta', 'Sparkle', 'Ice-Tey Pfirsich', 'Ice-Tey Zitrone'];
let drinkDescription = ['330ml', '330ml', '330ml', '330ml', '330ml'];
let drinkPrice = [3.50, 3.50, 3.50, 3.50, 3.50];

let dessertHeadline = ['Vanille-Eis', 'Erdbeer-Eis', 'Schokoladen-Eis', 'Zitronen-Eis', 'Pfirsich-Eis'];
let dessertDescription = ['150ml', '150ml', '150ml', '150ml', '150ml'];
let dessertPrice = [5.50, 5.50, 5.50, 5.50, 5.50];


//FUNCTION FOR SHOW ALL FOODS IN EACH SECTION
function loadFoods() {

  //FAVORITE
  for (let i = 0; i < favHeadline.length; i++) {
    document.getElementById('favFood').innerHTML +=/*html*/ `
      <div class="food-choice">
        <div class="food-info">
          <span class="food-headline-js" id="foodHeadline">${favHeadline[i]}</span>
          <span class="food-description-js">${favDescription[i]}</span>
          <span class="price-js" id="foodPrice">CHF ${favPrice[i].toFixed(2)}</span>
        </div>
        <div class="add-button" onclick="addFavFood(${i})">
        <img src="img/add.png">
        </div>
      </div>`;
  }

  //PIZZA
  for (let i = 0; i < pizzaHeadline.length; i++) {
    document.getElementById('pizza').innerHTML += /*html*/`
      <div class="food-choice">
        <div class="food-info">
          <span class="food-headline-js">${pizzaHeadline[i]}</span>
          <span class="food-description-js">${pizzaDescription[i]}</span>
          <span class="price-js">CHF ${pizzaPrice[i].toFixed(2)}</span>
        </div>
        <div class="add-button" onclick="addPizzaFood(${i})">
        <img src="img/add.png">
        </div>
      </div>`;
  }

  //PASTA
  for (let i = 0; i < pastaHeadline.length; i++) {
    document.getElementById('pasta').innerHTML += /*html*/`
      <div class="food-choice">
        <div class="food-info">
          <span class="food-headline-js">${pastaHeadline[i]}</span>
          <span class="food-description-js">${pastaDescription[i]}</span>
          <span class="price-js">CHF ${pastaPrice[i].toFixed(2)}</span>
        </div>
        <div class="add-button" onclick="addPastaFood(${i})">
        <img src="img/add.png">
        </div>
      </div>`;
  }

  //SALAD
  for (let i = 0; i < saladHeadline.length; i++) {
    document.getElementById('salad').innerHTML += /*html*/`
      <div class="food-choice">
        <div class="food-info">
          <span class="food-headline-js">${saladHeadline[i]}</span>
          <span class="food-description-js">${saladDescription[i]}</span>
          <span class="price-js">CHF ${saladPrice[i].toFixed(2)}</span>
        </div>
        <div class="add-button" onclick="addSaladFood(${i})">
        <img src="img/add.png">
        </div>
      </div>`;
  }

  //DRINKS
  for (let i = 0; i < saladHeadline.length; i++) {
    document.getElementById('drinks').innerHTML += /*html*/`
      <div class="food-choice">
        <div class="food-info">
          <span class="food-headline-js">${drinkHeadline[i]}</span>
          <span class="food-description-js">${drinkDescription[i]}</span>
          <span class="price-js">CHF ${drinkPrice[i].toFixed(2)}</span>
        </div>
        <div class="add-button" onclick="addDrinksFood(${i})">
        <img src="img/add.png">
        </div>
      </div>`;
  }

  //DESSERT
  for (let i = 0; i < dessertHeadline.length; i++) {
    document.getElementById('desserts').innerHTML += /*html*/`
      <div class="food-choice">
        <div class="food-info">
          <span class="food-headline-js">${dessertHeadline[i]}</span>
          <span class="food-description-js">${dessertDescription[i]}</span>
          <span class="price-js">CHF ${dessertPrice[i].toFixed(2)}</span>
        </div>
        <div class="add-button" onclick="addDessertsFood(${i})">
        <img src="img/add.png">
        </div>
      </div>`;
  }
}
///////////////////////////////////////////////////////////////////////////////////////

//FUNCTIONS FOR ADDING THE SELECTED FOOD TO THE CHECKOUT SECTION
function addFavFood(i) {
  let amount = 1;
  let headline = favHeadline[i];
  let price = favPrice[i];
  let index = checkoutFoodHeadline.indexOf(headline);

  if(index == -1){
    checkoutAmount.push(amount);
    checkoutFoodHeadline.push(headline);
    checkoutFoodPrice.push(price);
  } else {
    checkoutAmount[index]++;
  }
  showCheckout();
}


function addPizzaFood(i) {
  let amount = 1;
  let headline = pizzaHeadline[i];
  let price = pizzaPrice[i];
  let index = checkoutFoodHeadline.indexOf(headline);

  if(index == -1){
    checkoutAmount.push(amount);
    checkoutFoodHeadline.push(headline);
    checkoutFoodPrice.push(price);
  } else {
    checkoutAmount[index]++;
  }
  showCheckout();
}


function addPastaFood(i) {
  let amount = 1;
  let headline = pastaHeadline[i];
  let price = pastaPrice[i];
  let index = checkoutFoodHeadline.indexOf(headline);

  if(index == -1){
    checkoutAmount.push(amount);
    checkoutFoodHeadline.push(headline);
    checkoutFoodPrice.push(price);
  } else {
    checkoutAmount[index]++;
  }
  showCheckout();
}

function addSaladFood(i) {
  let amount = 1;
  let headline = saladHeadline[i];
  let price = saladPrice[i];
  let index = checkoutFoodHeadline.indexOf(headline);

  if(index == -1){
    checkoutAmount.push(amount);
    checkoutFoodHeadline.push(headline);
    checkoutFoodPrice.push(price);
  } else {
    checkoutAmount[index]++;
  }
  showCheckout();
}


function addDrinksFood(i) {
  let amount = 1;
  let headline = drinkHeadline[i];
  let price = drinkPrice[i];
  let index = checkoutFoodHeadline.indexOf(headline);

  if(index == -1){
    checkoutAmount.push(amount);
    checkoutFoodHeadline.push(headline);
    checkoutFoodPrice.push(price);
  } else {
    checkoutAmount[index]++;
  }
  showCheckout();
}


function addDessertsFood(i) {
  let amount = 1;
  let headline = dessertHeadline[i];
  let price = dessertPrice[i];
  let index = checkoutFoodHeadline.indexOf(headline);

  if(index == -1){
    checkoutAmount.push(amount);
    checkoutFoodHeadline.push(headline);
    checkoutFoodPrice.push(price);
  } else {
    checkoutAmount[index]++;
  }
  showCheckout();
}
///////////////////////////////////////////////////////////////////