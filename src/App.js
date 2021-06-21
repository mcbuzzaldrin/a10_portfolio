import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import logo from './static/images/logo.svg';
import './static/styles/App.css';
import footer from './static/images/footer.png';

import Paintings from './components/paintings';
import Merchandise from './components/merchandise';
import Nft from './components/nfts';
import Bio from './components/Bio';
import Painting from './components/Painting'
import Home from './components/Home';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link  to='/'>Home</Link>
          <Link to='/paintings'>Paintings</Link>
          <Link to='/merchandise'>Merchandise</Link>
          <Link to='/nfts'>NFTs</Link>
          <Link to='/bio'>Bio</Link>
        </nav>
      </header>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/paintings' component={Paintings} exact />
          <Route path='/paintings/:slug' component={Painting} />
          <Route path='/merchandise'><Merchandise /></Route>
          <Route path='/nfts'><Nft /></Route>
          <Route path='/bio'><Bio /></Route>
        </Switch>
      <footer>
      </footer>
    </div>
      </BrowserRouter>
  );
}

export default App;
