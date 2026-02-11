function pairSum(arr, num) {
    let pair = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                pair.push(arr[i], arr[j]);
                return pair;
            }
        }
    }
    return pair;
}

pairSum([-1, 4, 5, 5, 6, 7, 8], 10); //[ 4, 6 ]