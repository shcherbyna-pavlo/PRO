// ДЗ 17. Функція із замиканням


function sum() {
    let a = 1;
    return function l() {
        a += a
        console.log(a)
    }
}
let g = sum()