import './hero.scss'
import { heroImg, heroVector } from '../../assets';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

export default function Hero() {

  return (
  <div className='hero'>
      <React.Fragment >
      <CssBaseline />
      <Container maxWidth="lg" className='main'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={5}>
              <div className='hero-text'>
                <h1>
                  <span>Let's</span> Explore <span>Unique</span> clothes.
                </h1>
                  <p>Live for Influential and Innovative fashion!</p>
                <div>
                  <img src={heroVector} alt="vector-img" width={100} />
                  <Button variant="contained" className='signup-button'>Shop now</Button>
                </div>
              </div>
            </Grid>
            <Grid xs={0} sm={6} md={7} className='hero-img'>
              <img src={heroImg} alt="modal-image" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  </div>
  );
}

