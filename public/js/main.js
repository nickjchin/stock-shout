
const loginHandler = async (event) => {
  event.preventDefault();
 // console.log('Log in!');
  document.location.replace("login");
};

const signUpHandler = async (event) => {
  event.preventDefault();
  //console.log('Sign up!');
  document.location.replace("signup");
};

document
  .querySelector("#login")
  .addEventListener("click", loginHandler);
document
  .querySelector("#sign-up")
  .addEventListener("click", signUpHandler);

