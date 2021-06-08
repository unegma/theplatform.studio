import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Chrono } from "react-chrono";
import timelineItems from "../data/timelineItems";
import ModalPage from "../components/ModalPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
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

export default function TimelinePage(): JSX.Element {

  const classes = useStyles();

  const items = timelineItems;

  return (
    <section className="container">
      <Typography variant="subtitle1" gutterBottom>
        Timeline Example
      </Typography>
      <div>
        <Container >
          <div className={classes.root}>

            <div style={{ width: "100%", height: "80vh" }}>
              <Chrono mode="VERTICAL_ALTERNATING" scrollable={{scrollbar: true}} items={items}>
                {items.map((item) => (
                  <ModalPage key={item.cardTitle}
                    imageURL={item.media?.source.url}
                    title={item.cardTitle}
                    subtitle={item.cardSubtitle}
                    detail={item.cardDetailedText}
                    cardDate={item.title}>
                  </ModalPage>
                ))}
              </Chrono>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
