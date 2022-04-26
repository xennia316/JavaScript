let base = 5, height = 6, area1;

area1 = 1 / 2 * base * height;

console.log(area1);

// OR

let side1 = 5;
let side2 = 6;
let side3 = 7;

let total_side = (side1 + side2 + side3) / 2

let s = total_side
let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

console.log(area);