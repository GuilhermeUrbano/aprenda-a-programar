let n = 1500450271
let i = 2

if (n == 1) {
    console.log(`Não, o número ${n} não é primo!`)
} else {
    while (i < n) {
        if (n % i == 0) {
            console.log(`Não, o número ${n} não é primo!`)
            break
        } else {
            i++
        }    
    } if (i != n) {
    } else console.log(`Sim, o número ${n} é primo!`)
}