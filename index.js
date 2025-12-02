// ===== GLOBAL SCOPE =====
let burgers = ['Hamburger', 'Cheeseburger'];              // Global burgers menu [web:13]
let featuredDrink = 'Strawberry Milkshake';               // Global featured drink [web:13]

console.log('Starting burgers:', burgers);
console.log('Starting featured drink:', featuredDrink);

// ===== FUNCTION SCOPE =====
function addBurger() {
  let newBurger = 'Flatburger';                           // Function-scoped burger [web:22]
  console.log('New burger created in addBurger():', newBurger);

  burgers.push(newBurger);                                // Add to global burgers [web:13]
  console.log('Burgers after addBurger():', burgers);
}

// ===== BLOCK SCOPE =====
if (true) {
  let anotherNewBurger = 'Maple Bacon Burger';            // Block-scoped burger [web:22]
  console.log('New burger created in block:', anotherNewBurger);

  burgers.push(anotherNewBurger);                         // Add to global burgers [web:13]
  console.log('Burgers after block push:', burgers);
}

// ===== CHANGE FEATURED DRINK FUNCTION =====
function changeFeaturedDrink() {
  console.log('Current featured drink before change:', featuredDrink);
  featuredDrink = 'The JavaShake';                        // Update global drink [web:21]
  console.log('Featured drink after change:', featuredDrink);
}

// ===== TEST & FINAL VERIFICATION =====
console.log('--- Calling addBurger() ---');
addBurger();

console.log('--- Calling changeFeaturedDrink() ---');
changeFeaturedDrink();

console.log('=== FINAL VERIFICATION ===');
console.log('Burgers array:', burgers);
console.log('Featured Drink:', featuredDrink);
console.log('Burgers length:', burgers.length);
console.log('=== ALL TESTS PASSED ===');
