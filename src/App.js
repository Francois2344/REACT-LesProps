import React from "react";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Contact
        name="John McLane"
        avatar="https://vignette.wikia.nocookie.net/die-hard/images/6/6a/John_McClane_%28Pi%C3%A8ge_de_cristal%29.jpg/revision/latest/scale-to-width-down/562?cb=20191005104925&path-prefix=fr"
        online="Online"
      />
      <Contact
        name="John Rambo"
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/John_Rambo.jpg/1200px-John_Rambo.jpg"
      />
      <Contact
        name="John Wick"
        avatar="https://www.indiewire.com/wp-content/uploads/2019/05/07956f40-77c4-11e9-9073-657a85982e73.jpg"
        online="Online"
      />
    </div>
  );
}

export default App;
