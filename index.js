const config = require('config');


console.log("process.env.RATE_LIMITER_FEED_WINDOW_MIN : ",process.env.RATE_LIMITER_FEED_WINDOW_MIN);

console.log("rateLimiter.feed.windowMin : ",config.get('rateLimiter.feed.windowMin'));
console.log("rateLimiter.feed.maxLimit : ",config.get('rateLimiter.feed.maxLimit'));


console.log("rateLimiter.brand.windowMin : ",config.get('rateLimiter.brand.windowMin'));
console.log("rateLimiter.brand.maxLimit : ",config.get('rateLimiter.brand.maxLimit'));

console.log("process.env.NODE_ENV : ",process.env.NODE_ENV);

console.log("rateLimiter.product.windowMin : ",config.get('rateLimiter.product.windowMin'));
console.log("rateLimiter.product.maxLimit : ",config.get('rateLimiter.product.maxLimit'));


console.log("rateLimiter.cart.windowMin : ",config.get('rateLimiter.cart.windowMin'));
console.log("rateLimiter.cart.maxLimit : ",config.get('rateLimiter.cart.maxLimit'));