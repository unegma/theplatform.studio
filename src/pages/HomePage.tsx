import React from 'react';
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import dotenv from 'dotenv';
import Account from "../components/Account";
dotenv.config();

export default function HomePage(): JSX.Element {

  return (
    <section className="container">
      <Account/>
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
        <Typography>
          <Link className="navItem__right" to="/timeline2">
            Timeline2
          </Link>
        </Typography>
      </div>
    </section>
  );
}
