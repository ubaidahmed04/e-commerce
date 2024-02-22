import './../style.scss'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cards({ productsArr }) {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className='cards'>
      {productsArr ? (
        <>
          {productsArr.slice(0, 3).map(v => (
            <Card key={v.id} sx={{ maxWidth: 280 }} data-aos="zoom-out">
              <CardMedia
                component="img"
                height="300"
                image={v.img}
                alt="Product img"
              />
              <CardContent>
                <div className="title-section">
                  <Typography className='title'>
                    {v.title}
                  </Typography>
                  <Typography variant="h6" className='icon'>
                    <TrendingFlatIcon />
                  </Typography>
                </div>
                <Typography variant="body1" color="text.secondary" className='slogan'>
                  {v.slogan}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </>
      ) : (

        <div className='update-message' data-aos="zoom-in">
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              Sorry, We're currently updating our product inventory.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Please check back later.
            </Typography>
          </CardContent>
        </div>

      )

      }

    </div>
  );
}