const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    console.log(email);
    console.log(password);
  
    if (email && password && firstname && lastname)  {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({firstname, lastname, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response);
      if (response.ok) {
        document.location.replace("/login");
      } else {
        alert('Failed to sign up!');
      }
    }
  };

    document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
