import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import LoginSuccess from "./components/LoginSuccess";
import Home from "./components/Home";
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login-success" component={LoginSuccess} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
