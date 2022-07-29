function straircase(n) {
  for (let i = 0; i < n; i++){
    let stair = "";
    for (let s = 0; s < n - i - 1; s++){
      stair += " ";
    }
    for (let h = 0; h < i + 1; h++){
      stair += "#";
    }
    console.log(stair)
  }
 
}
straircase(6)