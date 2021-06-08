import React from 'react';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import TimelinePage from "./pages/TimelinePage";
import MagazinePage from "./pages/MagazinePage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import {Redirect, Route, Switch} from "react-router-dom";
import Timeline2Page from "./pages/Timeline2Page";
import WebThreeSection from "./components/WebThreeSection";

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App() {

  return (
    <div className="App">
      <Router>

      <React.Fragment>

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
                <WebThreeSection/>
              </div>

            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Toolbar />

        <Container>

          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/gallery" component={GalleryPage}/>
            <Route exact path="/magazine" component={MagazinePage}/>
            <Route exact path="/timeline" component={TimelinePage}/>
            <Route exact path="/timeline2" component={Timeline2Page}/>
            <Redirect to="/"/>
          </Switch>

        </Container>
      </React.Fragment>

      </Router>
    </div>
  );
}

export default App;
