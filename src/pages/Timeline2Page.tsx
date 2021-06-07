import React, {useCallback, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {Container, ListItemText} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Chrono } from "react-chrono";
import timelineItems from "../data/timelineItems";

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
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);

export default function Timeline2Page(): JSX.Element {

  const classes = useStyles();

  const items = timelineItems;

  return (
    <section className="container">
      <Typography variant="subtitle1" gutterBottom>
        Timeline (scroll left and right)
      </Typography>
      <div>
        <Container maxWidth="sm">
          <div className={classes.root}>
            {/*<GridList className={classes.gridList} cols={2.5}>*/}
            {/*  {tileData.map((tile) => (*/}
            {/*    <GridListTile key={tile.img}>*/}
            {/*      <img src={tile.img} alt={tile.title} />*/}
            {/*      <GridListTileBar*/}
            {/*        title={tile.title}*/}
            {/*        classes={{*/}
            {/*          root: classes.titleBar,*/}
            {/*          title: classes.title,*/}
            {/*        }}*/}
            {/*        actionIcon={*/}
            {/*          <IconButton aria-label={`star ${tile.title}`}>*/}
            {/*            /!*<StarBorderIcon className={classes.title} />*!/*/}
            {/*          </IconButton>*/}
            {/*        }*/}
            {/*      />*/}
            {/*    </GridListTile>*/}
            {/*  ))}*/}
            {/*</GridList>*/}

            <div style={{ width: "500px", height: "400px" }}>
              <Chrono mode="VERTICAL_ALTERNATING" scrollable={{scrollbar: true}} items={items} />
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
