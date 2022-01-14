import ReactDOM from "react-dom";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris Sev",
  location: "Las Vegas",
  foodType: "Everything",
  age: 33,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chris__sev",
  avatar:
    "https://res.cloudinary.com/betterdev/image/upload/v1624211301/chris_ge6pzx.jpg"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">display user info here. happy coding!</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
