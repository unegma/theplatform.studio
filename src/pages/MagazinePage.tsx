import React, {useCallback, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {Container, ListItemText} from "@material-ui/core";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    root: {
      maxWidth: 345,
    },
  }),
);

/**
 * Todo  Can we rename the Magazine format “artist Catalogue’ and then do another format for the Magazine where you only see the picture first and then you can go deeper. But at first it’s all about the ‘NFT’
 * @constructor
 */
export default function MagazinePage(): JSX.Element {

  const classes = useStyles();

  return (
    <section className="container">
      <div>
        <Container maxWidth="sm">
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Magazine
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://picsum.photos/150/200"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Info
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          This is placeholder info
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paper}>xs=8</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>xs=4</Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </section>
  );
}
