// ДЗ 17. Функція із замиканням


function funOne(a) {
    
    return function funTwo(b) {
       return a += b
    }
}
let sum = funOne(0)

console.log(sum(3))
console.log(sum(5))
console.log(sum(20))
console.log(sum(45))
console.log(sum(1))
