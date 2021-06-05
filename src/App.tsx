import React from 'react';
import styled from '@emotion/styled'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Main from './Main';
import Accommodation from './Accommodation';
import Gallery from './Gallery';
import Visit from './Visit';
import Contact from './Contact';

const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
`

const Footer = styled('footer')`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
`


function App() {
  const [lang, onLangChange] = React.useState('sv')

  return (<div style={{margin: '.2em 15em', height: '100vh'}}>
    <Router>
      <Header>
        <Link to="/" style={{fontFamily: 'Parisienne', fontSize: '2.5em', textDecoration: 'none', color: 'black'}}>Villa Björkdal</Link>
        <Link to="/besok" style={{textDecoration: 'none', color: '#595959'}}>Besök Björkdal</Link>
        <Link to="/galleri" style={{textDecoration: 'none', color: '#595959'}}>Galleri</Link>
        <Link to="/pargas" style={{textDecoration: 'none', color: '#595959'}}>Besök Pargas</Link>
        <Link to="/kontakt" style={{textDecoration: 'none', color: '#595959'}}>Kontakta oss</Link>
        {/* <select name="lang">
          <option value="sv">SV</option>
          <option value="fi">FI</option>
          <option value="en">EN</option>
        </select> */}
      </Header>
      <Switch>
        <Route path="/galleri">
          <Gallery />
        </Route>
        <Route path="/besok">
          <Accommodation />
        </Route>
        <Route path="/pargas">
          <Visit />
        </Route>
        <Route path="/kontakt">
          <Contact />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
