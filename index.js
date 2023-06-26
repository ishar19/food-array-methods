// Read the JSON data from the food.json file
const foodData = require('./food.json');

// Task 1: List all the food items
function listAllFoodItems() {
  return foodData;
}

// Task 2: List all the food items with category vegetables
function listVegetableFoodItems() {
  return foodData.filter((food) => food.category === 'Vegetable');
}

// Task 3: List all the food items with category fruit
function listFruitFoodItems() {
  return foodData.filter((food) => food.category === 'Fruit');
}

// Task 4: List all the food items with category protein
function listProteinFoodItems() {
  return foodData.filter((food) => food.category === 'Protein');
}

// Task 5: List all the food items with category nuts
function listNutsFoodItems() {
  return foodData.filter((food) => food.category === 'Nuts');
}

// Task 6: List all the food items with category grains
function listGrainsFoodItems() {
  return foodData.filter((food) => food.category === 'Grain');
}

// Task 7: List all the food items with category dairy
function listDairyFoodItems() {
  return foodData.filter((food) => food.category === 'Dairy');
}

// Task 8: List all the food items with calorie above 100
function listFoodItemsAboveCalorie(calorie) {
  return foodData.filter((food) => food.calorie > calorie);
}

// Task 9: List all the food items with calorie below 100
function listFoodItemsBelowCalorie(calorie) {
  return foodData.filter((food) => food.calorie < calorie);
}

// Task 10: List all the food items with highest protein content to lowest
function listFoodItemsByProteinContent() {
  return foodData.sort((a, b) => b.protiens - a.protiens);
}

// Task 11: List all the food items with lowest carb content to highest
function listFoodItemsByCarbContent() {
  return foodData.sort((a, b) => a.cab - b.cab);
}

// Example usage of the functions
console.log('Task 1: List all the food items');
console.log(listAllFoodItems());

console.log('\nTask 2: List all the food items with category vegetables');
console.log(listVegetableFoodItems());

console.log('\nTask 3: List all the food items with category fruit');
console.log(listFruitFoodItems());

console.log('\nTask 4: List all the food items with category protein');
console.log(listProteinFoodItems());

console.log('\nTask 5: List all the food items with category nuts');
console.log(listNutsFoodItems());

console.log('\nTask 6: List all the food items with category grains');
console.log(listGrainsFoodItems());

console.log('\nTask 7: List all the food items with category dairy');
console.log(listDairyFoodItems());

console.log('\nTask 8: List all the food items with calorie above 100');
console.log(listFoodItemsAboveCalorie(100));

console.log('\nTask 9: List all the food items with calorie below 100');
console.log(listFoodItemsBelowCalorie(100));

console.log('\nTask 10: List all the food items with highest protein content to lowest');
console.log(listFoodItemsByProteinContent());

console.log('\nTask 11: List all the food items with lowest carb content to highest');
console.log(listFoodItemsByCarbContent());
