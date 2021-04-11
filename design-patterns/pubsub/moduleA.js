const pubsub = require('./pubsub');

module.exports = {
    publishEvent() {
        const data = {
            message: 'TOP SECRET DATA'
        }
        pubsub.publish('anEvent', data);
    }
};
