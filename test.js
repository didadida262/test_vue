const arr = [1,2,3,4,5,6]

const res = arr.reduce((sum, val) => {
    sum = sum + val
    return sum
}, 0)
console.log(res)