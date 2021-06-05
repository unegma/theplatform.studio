import React, {useCallback, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {Container, ListItemText} from "@material-ui/core";
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';

export default function HomePage(): JSX.Element {

  return (
    <section className="container">
      <div className="nav-links-home">
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
    </section>
  );
}
