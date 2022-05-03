function titleCase(str) {
    const newArray = (str.split(' '));
    console.log(newArray)
    const updated = []
    for (let st in newArray){
          updated[st] = newArray[st][0].toUpperCase() + newArray[st].slice(1).toLowerCase();
    }
    console.log(updated.join(" "))
    return updated.join(" ")
  }
  
  titleCase("I'm a large little tea pot");