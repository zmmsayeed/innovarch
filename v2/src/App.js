// import {useState} from 'react';
import { Switch, Route } from "react-router-dom";

// importing bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// importing stylesheet
import "./App.css";

// importing Screens
import MainPage from "./screens/MainPage";


function App() {

  // const [page, setPage] = useState('home')

  return (
    <Switch>
      <Route exact path="/">
        <MainPage page={'Home'} />
      </Route>
      <Route exact path="/Home">
        <MainPage page={'Home'} />
      </Route>
      <Route exact path="/projects">
        <MainPage page={'Projects'} />
      </Route>
      <Route exact path="/about">
        <MainPage page={'About'} />
      </Route>
      <Route exact path="/clients">
        <MainPage page={'Clients'} />
      </Route>
      <Route exact path="/People">
        <MainPage page={'People'} />
      </Route>
      <Route exact path="/contact">
        <MainPage page={'contact'} />
      </Route>
    </Switch>
  );
}

export default App;
