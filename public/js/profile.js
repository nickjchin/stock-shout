const { User } = require("../../models");

function displayWatchlist(profile) {
    for (i = 0; i < User.watchlist.length; i++)
    var stockSymbol = User.watchlist[i].text();
    var requestUrl = "";
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var games = data.dates[0].games;     
  
        {
  
          var stockName;
          var numTweets;
  
          var stock = document.createElement("button");
          stock.setAttribute("class", stockName);
          stock.addEventListener("click", displayNumTweets );
  
          watchlist.append(gameTitle);
          gameTitle.append(stockLogo);
          gameTitle.append(stock);
        }