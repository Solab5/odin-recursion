function fibs(num) {
    const fibArray = [0, 1]
    for (let i=2; i<num; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i-2])
    }
    return fibArray
}


function fibsRec(num) {
    if (num <= 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    const fibArray = fibsRec(num - 1)
    fibArray.push(fibArray[fibArray.length -1] + fibArray[fibArray.length -2])
    return fibArray
}


console.log("iteractive approach")
console.log(fibs(10))

console.log("Recursive approach")
console.log(fibsRec(10))