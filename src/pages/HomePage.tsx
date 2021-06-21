import React from 'react';
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import Account from "../components/Account";
import {Divider} from "@material-ui/core";

export default function HomePage(): JSX.Element {

  return (
    <section className="container">

      <Account/>
      <Divider/>

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
        {/*<Typography>*/}
        {/*  <Link className="navItem__right" to="/timeline2">*/}
        {/*    Timeline2*/}
        {/*  </Link>*/}
        {/*</Typography>*/}
      </div>
    </section>
  );
}
