function maxSubArraySum(arr, num) {
    var sum = 0;
    arr.sort().reverse();
    for (var i = 0; i < num; i++) {
        sum = sum + arr[i];
    }
    return sum;;
}

console.log(maxSubArraySum([1, 3, 2, 4, 7, 5, 4], 3)); // 16