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
