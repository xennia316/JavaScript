let current_date = new Date();
let cuurent_year = current_date.getFullYear();
let day = current_date.getDay();
let current_month = current_date.getMonth();

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let current_day = days[day];
console.log(current_day);

// const check = (date) => {
//     let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     if ((date.getFullYear() > 2014) && (date.getFullYear() < 2050)) {
//         if((date.getMonth() === 3)){
//             console.log();
//         }
//     }
// }

console.log('.............');

for(let year = 2014; year <= 2050; year++){
    let dayy = new Date(year, 0, 1);
    if(dayy.getDay() === 0){
        console.log("1st January falls on a Sunday this year " + year);
    }
}