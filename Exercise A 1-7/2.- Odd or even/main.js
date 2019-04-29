function randomInts(array) {
   var array = []; 
   for (i = 0; i < 100; i++){
    array[i] = Math.floor((Math.random() * 1000));
   }
   console.log(array);
   return array;
}


function splitArray(){
var nums = randomInts(1000);
var evens = [];
var odds = [];

for (var i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 1) {
        odds.push(nums[i]);
    }
    else {
        evens.push(nums[i]);
    }
}
console.log(odds);
console.log(evens);

}

splitArray();









