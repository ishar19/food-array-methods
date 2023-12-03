// Read the JSON data from the food.json file
const foodData = require('./food.json');
function listFood(food=''){
  // Changed variable name from food -> fd because food is also a parameter whih cause confusion 
  if(food.length>0){
    return foodData.filter((fd) => { return fd.category === food})
  }
  else{
    return foodData
  }
}

listFood("Protein")
listFood('Nuts')
listFood()


// Here i think Sort function is used
function sortCalorie(condition){
  if(condition==='asec'){
    return foodData.sort((a , b) => a.calorie - b.calorie);
  }
  else if(condition==="desc"){
    return foodData.sort((a , b) => b.calorie - a.calorie)
  }
}

sortCalorie('asec')
sortCalorie('desc')

function sort(type){
  if(type==="protein"){
    return foodData.sort((a, b) => b.protiens - a.protiens)
  }
  else if(type==="carb"){
    return foodData.sort((a, b) => a.cab - b.cab)
  }
}
sort('protein')
sort('carb')

