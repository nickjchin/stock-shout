const backButtonHandler = async (event) => {
    event.preventDefault();
  
    document.location.replace("/profile");
  };
  const addButtonHandler = async (event) => {
    event.preventDefault();
 
    const response = await fetch('/api/stocks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
   
    document.location.replace("/profile");
  };

  const deleteButtonHandler = async (event) => {
    event.preventDefault();
    
    
    const response = await fetch('/api/stocks/', {
      method: 'DELETE',
      body: JSON.stringify({ user_id, stock_id }),
      headers: { 'Content-Type': 'application/json' },
    });
   
    document.location.replace("/profile");
  };

  document.querySelector(".back").addEventListener("click", backButtonHandler)
  document.querySelector(".add").addEventListener("click", addButtonHandler)
  document.querySelector(".delete").addEventListener("click", deleteButtonHandler)
