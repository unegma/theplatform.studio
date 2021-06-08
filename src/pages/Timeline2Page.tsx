import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
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
        Timeline2
      </Typography>
      <div>
        <Container maxWidth="sm">
          <div className={classes.root}>

            <div style={{ width: "100%", height: "90vh" }}>
              <Chrono mode="HORIZONTAL" scrollable={{scrollbar: true}} items={items} />
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
