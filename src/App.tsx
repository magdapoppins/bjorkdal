import React from 'react';
import './App.css';
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

const ContactMenu = styled('pre')`
  text-align: center;
  white-space: pre-line;
`

const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  height: 30px;
`

const Footer = styled('footer')`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: inherit;
`


function App() {
  return (<div style={{margin: '.2em 10em', height: '100vh'}}>
    <Router>
      <Header>
        <Link to="/">Villa Björkdal</Link>
        <Link to="/bnb">Bed & Breakfast</Link>
        <Link to="/galleri">Galleri</Link>
        <Link to="/kontakt">Kontakta oss</Link>
      </Header>
      <Switch>
        <Route path="/galleri">
          <Gallery />
        </Route>
        <Route path="/bnb">
          <Accommodation />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer>
        <ContactMenu>
          Kontakt:
          Bed & Breakfast Villa Björkdal
          Tervsundsvägen 155
          21600 Pargas
          tel. 044 732 6385
        </ContactMenu>
      </Footer>
    </Router>
  </div>
  );
}

export default App;
