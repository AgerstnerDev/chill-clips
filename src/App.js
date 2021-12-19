import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';

import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Signup} />

          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
