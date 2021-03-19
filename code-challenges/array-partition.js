function arrayPartition(array, partitions) {
    let cuts = partitions;
    if(!array.length) {
        return [];
    }
    let parts = [];
    let temp = [];
    for(let i = 0; i < array.length; i ++) {
        if(i === (cuts- 1)) {
            temp.push(array[i]);
            parts.push(temp);
            temp = [];
            cuts = cuts + partitions;
        } else {
            temp.push(array[i]);
            if(i === array.length - 1) {
                parts.push(temp);
            }   
        }
    }

    return parts;
}

let newArray = arrayPartition([1,2,3,4,5,6,7], 2);
console.log(newArray);