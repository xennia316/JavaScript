/**
 * @xennia316
 * Creating objects
 */
 const friends = {
    name: [['Sally'], ['Edwin'], ['Acha Rha\'ah']],
    age: [19, 20, 19],
 };
 
 console.log(friends);
//Using the (.) notation
 let nameValue = friends.name;
 console.log(nameValue);
//using [] notation
 let ageNew = friends["name"][2];
 console.log(ageNew);