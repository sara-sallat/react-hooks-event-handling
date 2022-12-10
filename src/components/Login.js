import React from "react";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `I Submit : ${event.target[0].name} [ ${event.target[0].value} ], ${event.target[1].name} [ ${event.target[1].value} ]`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );
}

export default Login;
