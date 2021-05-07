import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import User from "./pages/User";



function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/createuser"> Create A User</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createuser" exact component={CreateUser} />
          <Route path="/user/:id" exact component={User} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;


