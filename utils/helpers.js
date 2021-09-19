module.exports ={
    get_tweet_count: (symbol) =>{
        var Twitter = require("twitter");
        require("dotenv").config();

        var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        bearer_token: process.env.TWITTER_BEARER_TOKEN,
        });

        client.get('/2/tweets/counts/recent',{q:symbol}, function (error, tweet_count, response) {
        console.log(tweet_count);
        return tweet_count
        });
    }
}