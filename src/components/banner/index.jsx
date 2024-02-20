import './../style.scss'
import { bannerImg } from './../../assets';

import * as React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

function Banner() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
      <div className='banner'>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg" className='main'  data-aos="fade-up">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={0} sm={5} md={6} className='banner-img'>
                  <img src={bannerImg} alt="modal-image" />
                </Grid>
                <Grid xs={12} sm={7} md={6}>
                  <div className='banner-text'>
                    <h1>
                      <span>Payday</span> sale now
                    </h1>
                    <p>Spend minimal $100 get 30% off
                      voucher code for your next purchase</p>
                    <h5>1 June - 10 June 2021</h5>
                    <p>*Terms & Conditions apply</p>
                    <Button variant="contained" className='signup-button'>Shop now</Button>
                  </div>
                </Grid>

              </Grid>
            </Box>
          </Container>
        </React.Fragment>
      </div>

  )
}

export default Banner