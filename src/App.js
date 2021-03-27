import { Switch, Route } from "react-router-dom";

// importing bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// importing stylesheet
import "./App.css";

// importing Screens
import MainPage from "./screens/MainPage";


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
    </Switch>
  );
}

export default App;
