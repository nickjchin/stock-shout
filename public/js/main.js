const stockSearchFormHandler = async (event) => {
  event.preventDefault();

  const stock = document.querySelector("#entersymbol").value.trim();

//   if (stock) {
//     const response = await fetch("", {
//       method: "POST",
//       body: JSON.stringify({ stock }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("results");
//     } else {
//       alert("No Stock Symbol Found!");
//     }
//   }
};

const loginHandler = async (event) => {
  event.preventDefault();
  console.log('Log in!');
  document.location.replace("login");
};

const signUpHandler = async (event) => {
  event.preventDefault();
  console.log('Sign up!');
  document.location.replace("signup");
};

document
  .querySelector("#login")
  .addEventListener("click", loginHandler);
document
  .querySelector("#sign-up")
  .addEventListener("click", signUpHandler);

