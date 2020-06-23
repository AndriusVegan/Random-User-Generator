import React, { useEffect, useState } from "react";
import "./App.css";
import Spinner from "react-spinkit";

function App() {
  const [user, setUser] = useState({
    name: { first: "vegan", last: "vegan", title: "vegan" },
    email: "vegan",
    phone: "vegan",
    gender: "vegan",
    picture: { medium: "vegan" },
    //was meant to be put {user} , here, need to find better way to work as the data should be lower;
    //gave initial state as "vegan"
  });

  useEffect(() => {
    //this code runs when component loads, once only
    // useEffect runs when anything changes, to run once only put []
    const fetchData = async () => {
      let response = await fetch("https://randomuser.me/api/");
      if (response.ok) {
        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        console.log(json);
        setUser(json.results[0]);
      } else {
        alert("HTTP-Error: " + response.status);
      }
    };
    fetchData();
  }, []);

  const {
    name: { first: firstName, last: lastName, title },
    email,
    phone,
    gender,
    picture: { medium: profilePicUrl },
  } = user;

  return (
    <div className="app">
      {!profilePicUrl ? (
        <Spinner name="pacman" fadeIn="none" />
      ) : (
        <div className="app__container">
          <h1>Random User Generator</h1>
          <img src={profilePicUrl} alt="Profile pic" />
          <h2>
            {firstName} {lastName}
          </h2>
          <h3>Email: {email}</h3>
          <h3>Phone: {phone}</h3>
          <h4>Gender:{gender}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
