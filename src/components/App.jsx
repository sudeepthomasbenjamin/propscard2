import React from "react";
import Card from "../Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        src={contacts[0].imgURL}
        ph={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        src={contacts[1].imgURL}
        ph={contacts[1].phone}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
