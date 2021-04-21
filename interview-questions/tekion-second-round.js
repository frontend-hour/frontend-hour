// Question snippet below. Design a middleware...

const sampleRequest = (ids) => {
    console.log('requested for', ids);
    return new Promise((resolve, reject) => {
        if (!Array.isArray(ids)) {
            reject(new Error('fail'));
        }
        const response = ids.reduce((acc, id) => {
            acc[id] = `${id}_test`
            return acc;
        }, {});
        setTimeout(() => {
            resolve(response);
        }, 1000);
    })
}

sampleRequest([1, 2, 3]).then(r => console.log(r));
setTimeout(() => {
    sampleRequest([1, 2, 3, 4, 5]).then(r => console.log(r));
}, 2000);


