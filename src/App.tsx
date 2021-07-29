import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
// import './App.css';
// import './global.scss';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import HomePage from './pages/HomePage';
import {Redirect, Route, Switch} from 'react-router-dom';
import TimelinePage from './pages/TimelinePage/TimelinePage';
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
    <Router>
      <div style={{minHeight: '100vh'}}>
        {/* <HideOnScroll>
          <AppBar style={{ background: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #999' }}>
            <Toolbar className="toolbar">

              <div className="nav-links-left">
                <Typography variant="h6">
                  <Link className="logo" to="/">
                    ThePlatform
                  </Link>
                </Typography>
              </div>*/}

              <div className="nav-links-right">
                <WebThreeSection/>
              </div>

        {/*
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Toolbar /> */}
        <div style={{ backgroundColor: 'palevioletred', width: '100%', height: 20 }}>1234546</div>
        {/* <Container> */}
        <Switch>
          <Route path="/timeline" component={TimelinePage} />
          <Route exact path="/" component={HomePage}/>
          <Redirect to="/"/>
        </Switch>
        {/* </Container> */}
      </div>
    </Router>
  );
}

export default App;
