import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee");
  }

  return <button onClick={(event) => tickle(event)}>Tickle me!</button>;
}

export default Tickler;
