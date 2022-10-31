// let mas = []
// for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) { 
//     mas.push(String.fromCharCode(i)) 
// }
// console.log(mas)


// function alphabetPosition(text) {
//    let c = [...(text.toLowerCase())];
//    // return c.reduce((q,el) => {
//    //    return q = q + (mas.indexOf(el)+1) 
//    // },"")
   
    
   
   
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))



// function queueTime(customers, n) {
//    let a = []

//    for (let i = 0; i < n;i++) {
//       a[i]=[];
//       a[i].push(customers[i])
      
//    }
//    let nMin
//    console.log(a[0][0])
//    if (a[0][0] <= a[1][0]) {
//       nMin = a[0][0]
//    } else {
//       nMin = a[1][0]
//    }
//    console.log(nMin)
//    while ()
//    // for (let j = n; j < customers.length; j++) {
//    //    console.log(customers[j])
  
//    //   console.log(c)

//    //    if((a[i].reduce((a,el) => a += el)) < (a[i+1].reduce((a,el) => a += el)))
//    //    a[i].push(customers[j])
//    // }
//  }

// //  queueTime([10,2,3,3], 2)



//  function queueTime(customers, n) {
//    let w = new Array(n).fill(0);
//    console.log(w)

//    for (let t of customers) {
//       let idx = w.indexOf(Math.min(...w));
//       console.log(idx)
//       console.log(Math.min(...w))
      
//       w[idx] += t;
//       console.log(w[idx])
//    }
//    return Math.max(...w);
//  }
//  console.log(queueTime([2,2,3,10], 2))


// class GridView {
  
// }


let a = [1, 2, 2]
let b = [1, 2, 5]

console.log(
   JSON.stringify(a) == JSON.stringify(b)
)