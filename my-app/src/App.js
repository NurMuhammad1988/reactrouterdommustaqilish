import './App.css';
import Blog from './Blog';
import Aboute from './Aboute';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>

      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/aboute" component={Aboute} />
        </Switch>



      </div>

    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is Home page</p>
    </div>
  )
}

export default App;
