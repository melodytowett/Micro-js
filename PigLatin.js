function translatePigLatin(str) {
  let vowels = 'aeiou';
  let firstWord = str[0];
  for(let i = 0; i<vowels.length; i++){
    if(vowels[i].includes(firstWord)===true){
      return str + "way"
    }
  }
    let i = 0;
    let cons = ""
    while(vowels.includes(str[i]) ===false && i<str.length){
      cons += str[i]
      i++
    } 
    return str.substring(i) + cons +"ay" 
}

console.log(translatePigLatin("schwartz"));