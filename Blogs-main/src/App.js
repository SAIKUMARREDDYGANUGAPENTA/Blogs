import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import BlogDetails from './Components/BlogDetails';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>

        <Switch>
          <Route exact path='/create'>
            <Create></Create>
          </Route>

          <Route exact path='/update/:id'>
            <Update></Update>
          </Route>

          <Route exact path="/blogs/:id">
            <BlogDetails></BlogDetails>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;