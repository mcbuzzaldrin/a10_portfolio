import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import MailchimpSubscribe from "react-mailchimp-subscribe";

import './static/styles/App.css';

import Blog from './components/pages/Blog';
import BlogPost from "./components/pages/BlogPost";
import Paintings from './components/pages/paintings';
import Merchandise from './components/pages/merchandise';
import Nft from './components/pages/nfts';
import Bio from './components/pages/Bio';
import Painting from './components/pages/Painting'
import Home from './components/pages/Home';
import Navigation from './components/navigation';
import React from "react";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/blog' exact component={Blog} />
              <Route path='/blog/:slug' component={BlogPost} exact />
              <Route path='/paintings' component={Paintings} exact />
              <Route path='/paintings/:slug' exact component={Painting} />
              <Route path='/merchandise' component={Merchandise} exact />
              <Route path='/nfts'  component={Nft} exact />
              <Route path='/bio' component={Bio} exact/>
            </Switch>

          <footer>
            <div className='subscribe-form'>
              <h3>Subscribe for updates!</h3>
              <p>Join our mailing list to stay in the loop with my newest releases, NFT drops, and blog posts.</p>
              <MailchimpSubscribe url='https://art.us6.list-manage.com/subscribe/post?u=18cce188b2119215d1bbcb027&amp;id=8c6fbc7869' />
            </div>
            <div className='instagram-link'>
              <a href='https://www.instagram.com/kingpin.makh/'>
                Instagram: @kingpin.makh
              </a>
              <SocialIcon url='https://www.instagram.com/kingpin.makh/' />
            </div>
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
