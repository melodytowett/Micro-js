function findMissingPositive(arr)
{
    let i;
  
        // Mark arr[i] as visited by making
        // arr[arr[i] - 1] negative. Note that
        // 1 is subtracted because index start
        // from 0 and positive numbers start from 1
        for (i = 0; i < arr.length; i++) {
            let x = Math.abs(arr[i]);
            if (x - 1 < arr.length && arr[x - 1] > 0)
                arr[x - 1] = -arr[x - 1];
        }
  
        // Return the first index value at which
        // is positive
        for (i = 0; i < arr.length; i++)
            if (arr[i] > 0)
      return i + 1;
                // 1 is added because indexes
        // start from 0
  
        return arr.length + 1;
}
console.log (findMissingPositive([1, 3, 6, 4, 1, 2] ))
 