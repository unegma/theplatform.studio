import React from 'react';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import TimelinePage from "./pages/TimelinePage";
import MagazinePage from "./pages/MagazinePage";
import GalleryPage from "./pages/GalleryPage";
import {Redirect, Route, Switch} from "react-router-dom";


interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// function App(props: Props) {
function App() {

  return (
    <div className="App">
      <Router>
      {/*<header className="App-header">*/}
      {/*  <p>*/}
      {/*    Hello*/}
      {/*  </p>*/}
      {/*</header>*/}

      <React.Fragment>

        {/*<HideOnScroll {...props}>*/}
        <HideOnScroll>
          <AppBar style={{ background: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #999' }}>
            <Toolbar className="toolbar">

              <div className="nav-links-left">
                <Typography variant="h6">
                  <Link className="logo" to="/">
                    ThePlatform
                  </Link>
                </Typography>
              </div>

              <div className="nav-links-right">
                <Typography>
                  <Link className="navItem__right" to="/gallery">
                    Gallery
                  </Link>
                </Typography>
                <Typography>
                  <Link className="navItem__right" to="/magazine">
                    Magazine
                  </Link>
                  </Typography>
                <Typography>
                  <Link className="navItem__right" to="/timeline">
                    Timeline
                 </Link>
                </Typography>
              </div>

            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Toolbar />

        <Container>

          <Switch>
            <Route exact path="/gallery" component={GalleryPage}/>
            <Route exact path="/magazine" component={MagazinePage}/>
            <Route exact path="/timeline" component={TimelinePage}/>
            <Redirect to="/"/>
          </Switch>

        </Container>
      </React.Fragment>

      </Router>
    </div>
  );
}

export default App;
