function preprocess(p,x,y,n)
{
    for (let i = 0; i < n; i++)
        p[i] = x[i] * x[i] + y[i] * y[i];
     
    p.sort(function(a,b){return a-b;});
     
}
 
function query(p,n,rad)
{
    let start = 0, end = n - 1;
    while ((end - start) > 1) {
        let mid = Math.floor((start + end) / 2);
        let tp = Math.sqrt(p[mid]);

        if (tp > (rad * 1.0))
            end = mid - 1;
        else
            start = mid;
    }

    let tp1 = Math.sqrt(p[start]);
    let tp2 = Math.sqrt(p[end]);

    if (tp1 > (rad * 1.0))
        return 0;
    else if (tp2 <= (rad * 1.0))
        return end + 1;
    else
        return start + 1;
}

let x=[1, 2, 3, -1, 4 ];
let y=[1, 2, 3, -1, 4];
let n = x.length;
let p=new Array(n);
for(let i=0;i<n;i++)
{
    p[i]=0;
}
console.log (preprocess(p, x, y, n));
