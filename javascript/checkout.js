let checkoutAmount = [];
let checkoutFoodHeadline = [];
let checkoutFoodPrice = [];

//FUNCTION FOR THE CHECKOUT SECTION, WHEN ITS EMPTY
function checkOutSection() {
    document.getElementById('checkoutMenu').innerHTML = /*html*/ `
    <img src="img/bag.png">
    <span class="checkout-info">Fülle deinen Warenkorb</span>
    <span class="checkout-text">Füge einige leckere Gerichte aus der Sepisekarte hinzu und bestelle dein Essen.</span>
    `;
}

//FUNCTION FOR SHOW THE OVERVIEW OF YOUR CHECKOUT AND WHAT ITEMS U PUT IN IT
function showCheckout() {
    let checkoutMenu = document.getElementById('checkoutMenu');
    checkoutMenu.innerHTML = '';

    let subsum = 0;
    let deliveryCost = 5.00;
    let requiredSum = 30.00;

    //FOR EDITING YOUR FOOD IN CHECKOUT
    for (i = 0; i < checkoutFoodHeadline.length; i++) {
        let itemCosts = checkoutAmount[i] * checkoutFoodPrice[i];
        subsum += itemCosts;
        checkoutMenu.innerHTML += /*html*/ `
        <div class="checkout-food">
            <div class="amount-food">
                <span>${checkoutAmount[i]}</span>
            </div>
            <div class="checkout-food-info">
                <div>
                    <span class="food-headline-weight">${checkoutFoodHeadline[i]}</span>
                </div>
                    <span class="food-note">Anmerkung hinzufügen</span>
            </div>
            <div class="checkout-amount-buttons">
                <div class="checkout-price-info">
                <span>CHF</span>
                <span>${itemCosts.toFixed(2)}</span>
                </div>
                <div class="increase-decrease-buttons">
                    <div class="increase-decrease" onclick="removeOne(${i})">
                        <img src="img/minus.png">
                    </div>
                    <div class="increase-decrease" onclick="addOneMore(${i})">
                        <img src="img/plus.png">
                    </div>
                </div>
            </div>
        </div>
        `
    }

    //TOTAL SUM IN YOUR CHECKOUT
    let requiredAmount = requiredSum - subsum;
    let totalSum = subsum + deliveryCost;

    checkoutMenu.innerHTML +=/*html*/ `
    <div id="hide">
        <div class="required-amount-section">
            <div class="required">
                <span>Benötigter Betrag, um den Mindestbestellwert zu erreichen</span>
                <div class="required-amount">
                    <span>CHF</span>
                    <span class="test">${requiredAmount.toFixed(2)}</span>
                </div>
            </div>
                <div class="required-info">
                    <span>Leider kannst du noch nicht bestellen. Pizza Time liefert erst ab einem Mindestbestellwert von CHF 30.00 (exkl. Lieferkosten).</span>
                </div>
            </div>
        </div>
        <div class="total-sum">
            <div class="between">
                <span>Zwischensumme</span>
                <div class="checkout-currency-price">
                    <span>CHF</span>
                    <span>${subsum.toFixed(2)}</span>
                </div>
            </div>
            <div class="between">
                <span>Lieferkosten</span>
                <div class="checkout-currency-price">
                    <span>CHF</span>
                    <span id="deliveryCost">${deliveryCost.toFixed(2)}</span>
                </div>
            </div>
            <div class="weight between">
                <span>Gesamt</span>
                <div class="checkout-currency-price">
                    <span>CHF</span>
                    <span>${totalSum.toFixed(2)}</span>
                </div>
            </div>
        </div>
        <!--PAY BUTTON-->
        <div class="complete-checkout-grey" id="required-number-not-reached">
            <span>Bezahlen</span>
        </div>
        <div class="d-none" id="required-number-reached" onclick="rickRoll()">
            <span>Bezahlen</span>
        </div>
    </div>
    `   //If the required sum in the checkout got reached the pop-up for the required amount will disappear
        if(subsum > 30) {
            document.getElementById('hide').innerHTML = '';
            document.getElementById('required-number-not-reached').classList.remove('complete-checkout-grey');
            document.getElementById('required-number-not-reached').classList.add('d-none');
            document.getElementById('required-number-reached').classList.add('complete-checkout');
            document.getElementById('required-number-not-reached').classList.add('complete-checkout:hover');
        }

        updateMobileCheckoutBtn();
}

//FUNCITON FOR SHOWING HOW MUCH ITEMS THAT WERE PUT TO THE CHECKOUT
function updateMobileCheckoutBtn(){
    document.getElementById('itemsInCheckout').innerHTML = getCheckoutTotalAmounts();
}

// FUNCTION FOR CALCULATE THE TOTAL ITEMS
function getCheckoutTotalAmounts(){
    let amounts = 0;

    for (let i = 0; i < checkoutAmount.length; i++) {
        amounts += checkoutAmount[i];
    }

    if(amounts > 0){
        document.getElementById('itemsInCheckout').classList.add('orange');
    } else {
        document.getElementById('itemsInCheckout').classList.remove('orange');
    }

    return amounts;
}

//FUNCTION FOR NOT HIDE THE MOBILE/RESPONSIVE SECTION WHEN PRESSING INSIDE IT
function doNotClose(event){
    event.stopPropagation();
}

//FUNCTION FOR SHOWING THE CHECKOUT SECTION
function showCheckoutOverviewResponsive(){
    document.getElementById('checkoutSection').classList.remove('checkout-section');
    document.getElementById('checkoutSection').classList.add('checkout-section-responsive');
    document.getElementById('checkoutSection').classList.add('d-flex');
    document.getElementById('responsiveCheckoutSection').classList.add('d-none');
    document.getElementById('responsiveCheckoutSection').classList.remove('d-flex');
    document.getElementById('closeCheckoutButton').classList.remove('d-none');
    document.getElementById('checkoutSticky').classList.remove('sticky')
    document.getElementById('xBtn').classList.remove('d-none');
    document.getElementById('xBtn').classList.add('d-flex');
}

//FUNCTION FOR HIDE THE MOBILE/RESPONSIVE CHECKOUT SECTION
function hideCheckoutOverviewResponsive(){
    document.getElementById('checkoutSection').classList.remove('checkout-section-responsive');
    document.getElementById('checkoutSection').classList.add('checkout-section');
    document.getElementById('checkoutSection').classList.remove('d-flex');
    document.getElementById('responsiveCheckoutSection').classList.remove('d-none');
    document.getElementById('responsiveCheckoutSection').classList.add('d-flex');
    document.getElementById('checkoutSticky').classList.add('sticky')
    document.getElementById('xBtn').classList.add('d-none');
    document.getElementById('xBtn').classList.remove('d-flex');
}

//FUNCTION FOR DELETE THE SELECTED ITEM PERMANENTLY IN THE CHECKOUT IF THE AMOUNT HITS ZERO
function deleteCheckout(i) {
    checkoutAmount.splice(i, 1);
    checkoutFoodHeadline.splice(i, 1);
    checkoutFoodPrice.splice(i, 1);
}

//FUNCTIONS FOR ADD AND REMOVE BUTTONS ("+" "-") IN CHECKOUT SECTION////////

//FUNCTION FOR AD THE SAME ITEM (MULTIPLE TIMES) TO THE CHECKOUT SECTION
function addOneMore(i) {
    checkoutAmount[i]++;
    showCheckout();
}

//FUNCTION FOR DECREASE THE AMOUNT OF THE SELECTED ITEM IN THE CHECKOUT SECTION AND IF EVERYTHING DELETED, IT WILL SWITCH BACK TO SHOW THAT THE CHECKOUT IS EMPTY (function deletedCheckout(i) is responsible for this)
function removeOne(i) {
    checkoutAmount[i]--;
    showCheckout();

    if (checkoutAmount[i] == 0) {
        deleteCheckout(i);
        showCheckout();
    }

    if(checkoutAmount.length == 0) {
        checkOutSection();
    }
}
//---------------------------------------------------------------------------

//YOU GOT RICKROLLED
function rickRoll(){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t", "_blank");
}




