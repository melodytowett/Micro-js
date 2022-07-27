function pairElement(str) {
  let bigArray = []
  let smallArray = []
for (let i = 0; i < str.length; i++){
  if(str[i] == "A"){
    smallArray.push(["A","T"])
  }
  if(str[i]=="T"){
    smallArray.push(["T","A"])
  }
  if(str[i]=="C"){
    smallArray.push(["C","G"])
  }
  if(str[i]=="G"){
    smallArray.push(["G","C"])
  }
}
return smallArray;
}

let result = pairElement("ATCGA");
console.log(result)