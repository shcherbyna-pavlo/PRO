let a = +prompt("Введіть число яке Ви хочете піднести до степеня")
let b = +prompt("Введіть степінь")

function pow (num, degree) {
    if (degree === 1) return num;
    if (degree === 0) return 1;
    
    return num * pow (num, degree - 1)
}

console.log(`${a} в степені ${b} = `, pow (a, b))
