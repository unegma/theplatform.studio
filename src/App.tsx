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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      // width: 500,
      // height: 450,
    },
  }),
);

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

  const classes = useStyles();

  return (
    <div className="App">
      <Router>
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

              <div className="nav-links-left">
                <Link to="/">
                  <Typography className="logo" variant="h6">
                    ThePlatform
                  </Typography>
                </Link>
              </div>

              <div className="nav-links-right">
                <Link to="/">
                  <Typography>
                    Gallery
                  </Typography>
                </Link>
                <Link to="/">
                  <Typography>
                    Magazine
                  </Typography>
                </Link>
                <Link to="/">
                  <Typography>
                    Timeline
                  </Typography>
                </Link>
              </div>

            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Toolbar />

        <Container>

          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>

        </Container>
      </React.Fragment>

      </Router>
    </div>
  );
}

export default App;
