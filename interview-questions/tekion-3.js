// Create a Middleware that caches the api response of already existing response data

function middleware(sampleResponse) {
    let responseStore = {}; 

    return function (ids) {
        if(Array.isArray(ids)) {
            let getDataIds = [];
            ids.forEach((id) => {
                if(!Object.keys(responseStore).includes(id)) {
                    getDataIds.push(id);
                }
            });
            return new Promise((resolve, reject) => {
                sampleResponse(getDataIds).then(r => {
                    responseStore = [...r, ...responseStore];
                    resolve(responseStore);
                });
            })
        }
    }
}

// I will add time stamp when storing in store
// sorted based on time stamp in store
// Based on time ciriteria of data, I will expiry flag to data
// And check the falag with time
// Actual time
// When accessed the data in store
// There has to be timer that cleans based expiry
// It should run always again problem
// no, think...
// some time slots - based on that I will clear memory which expiried
// Based on the browser memory I will define the slots
// How often it slows with meory growth
// Based on data size in store  - these are not questions
// How often data s cached - these are not questions to him
// I will define the time slots based on data size and how often data is cached

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

sampleRequest([1,2,3]).then(r => console.log(r));
setTimeout(() => {
	sampleRequest([1,2,3,4,5]).then(r => console.log(r));
}, 2000);
