import './card.scss'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


export default function Cards({ productsArr }) {

  console.log(productsArr)
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      {productsArr ? (
        <>
          {productsArr.map(v => (
            <Card key={v.id}  sx={{ maxWidth: 280 }}>
              <CardMedia
                component="img"
                height="300"
                image={v.img}
                alt="Product img"
              />
              <CardContent>
                <div className="title-section">
                  <Typography variant="h6" className='title'>
                    {v.title}
                  </Typography>
                  <Typography variant="h6" className='icon'>
                    <TrendingFlatIcon />
                  </Typography>
                </div>
                <Typography variant="body1" color="text.secondary">
                  {v.slogan}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </>
      ) : (

        <>

          <CardContent>
            <Typography variant="h5" color="text.secondary">
              Hoodies/T-Shirt
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Explore Now!
            </Typography>
          </CardContent>
        </>
      )

      }

    </div>
  );
}