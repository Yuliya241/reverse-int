module.exports = function reverse (n) {
    let result =  parseInt(n.toString().split('').reverse().join(''))
    return Math.abs(result)
}
console 