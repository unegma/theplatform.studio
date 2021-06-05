import React, {useCallback, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {Container, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import tileData from "../tileData";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Masonry from 'react-masonry-css';

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

export default function GalleryPage(): JSX.Element {
  const classes = useStyles();

  return (
    <section className="container">
      <div>
        <Container maxWidth="sm">
          {/*<GridList cellHeight={160} className={classes.gridList} cols={3}>*/}
          {/*  {tileData.map((tile) => (*/}
          {/*    <GridListTile key={tile.img} cols={tile.cols || 1}>*/}
          {/*      <img src={tile.img} alt={tile.title} />*/}
          {/*    </GridListTile>*/}
          {/*  ))}*/}
          {/*</GridList>*/}
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
              {tileData.map((tile) => (
                <div key={tile.title} className="image-item">
                  <img src={tile.img} alt={tile.title} />
                </div>
              ))}
          </Masonry>
        </Container>
      </div>
    </section>
  );
}
