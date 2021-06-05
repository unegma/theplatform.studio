import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

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
      {/*<header className="App-header">*/}
      {/*  <p>*/}
      {/*    Hello*/}
      {/*  </p>*/}
      {/*</header>*/}

      <React.Fragment>
        <CssBaseline />
        {/*<HideOnScroll {...props}>*/}
        <HideOnScroll>
          <AppBar style={{ background: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #999' }}>
            <Toolbar>
              <Typography className="logo" variant="h6">ThePlatform</Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container>

        </Container>
      </React.Fragment>

    </div>
  );
}

export default App;
