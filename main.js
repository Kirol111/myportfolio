// ===== Coin counter =====
// Each click on the coin box in the navbar adds 1 coin.

// 1. Get the two elements from the page by their id
var coinBox = document.getElementById("coin-hud");
var coinCounter = document.getElementById("coin-counter");

// 2. Variable that stores the number of coins (same start value as the HTML)
var coins = 99;

// 3. This function runs every time the coin box is clicked
function addCoin() {
  coins = coins + 1;

  // After 99 coins, go back to 0 (like Mario's coin counter)
  if (coins > 99) {
    coins = 0;
  }

  // Show the new number on the page
  coinCounter.innerHTML = coins;
}

// 4. Connect the click event to the function
coinBox.onclick = addCoin;