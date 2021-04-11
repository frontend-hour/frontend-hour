const pubsub = require('./pubsub');
let subscription;

subscription = pubsub.subscribe('anEvent', data => {
    console.log(`'anEvent', was published with this data: ${data.message}`);
    subscription.unsubscribe();
});
