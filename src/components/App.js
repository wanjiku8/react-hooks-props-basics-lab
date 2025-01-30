import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {
  return React.createElement('div', null, 
    React.createElement(NavBar, null),
    React.createElement(Home, { name: user.name, city: user.city }),
    React.createElement(About, { bio: user.bio, github: user.links.github, linkedin: user.links.linkedin })
  );
}

export default App;
