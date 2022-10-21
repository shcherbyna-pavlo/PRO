let a = +prompt("Перше число")
let b = +prompt("степінь")

let c = 1;
let d = a;
function pow (num, degree) {
    if (degree === 1) return d;
    c++
    if (c > degree) return;
    d *= num
    pow (a, b)
    return d
}
console.log(`${a} в степені ${b} = `, pow (a, b))
