import './../style.scss'
import React, {useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Community() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='community' data-aos="fade-up" data-aos-offset="100">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className='main'>

          <Typography variant="h3" className='main-heading'>
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </Typography>
          <Typography variant="body2" className='text'>
            Type your email down below and be young wild generation
          </Typography>
          <div className='text-field'>
            <Paper
              className='paper'
            >
              <InputBase
                className='input'
                placeholder="Send your email"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
                <Button variant="contained" className='btn'>send</Button>
              </IconButton>
            </Paper>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
}