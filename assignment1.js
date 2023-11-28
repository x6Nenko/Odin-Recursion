function fibs(num) {
    let result = [];

    for (let i = 0; i < num; i++) {
        if (i < 2) {
            result.push(i);
        } else {
            let nextNum = result[i - 1] + result[i - 2];
            result.push(nextNum);
        } 
    };

    return result;
};

function fibsRec(n) {
    if (n == 0) {
        return [0];
    };

    if (n == 1) {
        return [0, 1];
    };

    const arr = fibsRec(n - 1);
    return [...arr, arr[n-1] + arr[n-2]];
};

console.log(fibs(8));
console.log(fibsRec(8));