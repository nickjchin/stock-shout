const searchFormHandler = async (event) => {
    event.preventDefault();
  
    const symbol = document.querySelector('#entersymbol').value.trim();
    console.log(symbol);
    
  
    if (symbol) {
      const response = await fetch(`/api/stocks/${symbol}`, {
        method: 'POST',
        body: JSON.stringify({ symbol }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);
      if (response.ok) {
        document.location.replace("/searchresults");
      } else {
        alert('Failed to find Stock!');
      }
    }
  };

    document
  .querySelector(".search-form")
  .addEventListener("submit", searchFormHandler);


  const watchlistButtonHandler = async (event) => {
    event.preventDefault();
  
      var buttonClicked = event.target;
      console.log("buttonClicked: ", buttonClicked);
      const stock_id = parseInt( buttonClicked.className);

      console.log(stock_id);
  
      const response = await fetch(`/api/stocks/${stock_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);
      if (response.ok) {
        document.location.replace("/searchresults");
      } else {
        alert('Failed to find Stock!');
      }
    
  };
  const backButtonHandler = async (event) => {
    event.preventDefault();
   // console.log('Log in!');
    document.location.replace("profile");
  };

  

    document
  .querySelector(".search-form")
  .addEventListener("submit", searchFormHandler);

  document.querySelector(".stock-watchlist").addEventListener("click", watchlistButtonHandler)

