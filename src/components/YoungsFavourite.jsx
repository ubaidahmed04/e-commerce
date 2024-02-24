import './style.scss'
import * as React from 'react';
import { cardImg, cardImg2 } from '../assets'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FavouriteArr = [
    {
        id: 1,
        img: cardImg,
        title: "Trending on instagram",
        slogan: "Explore now!"
    },
    {
        id: 2,
        img: cardImg2,
        title: "Trending on instagram",
        slogan: "Explore now!"
    }
]


const YoungsFavourite = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='youngs-favourite'>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg" className='main'>
                    {
                        FavouriteArr && FavouriteArr.map(v => (
                            <Box className='favourite-card' key={v.id} data-aos="zoom-out-down">
                                <div>
                                    <img src={v.img} alt="" />
                                </div>
                                <div className="title-section">
                                <div>
                                    <Typography variant="h6" className='title'>
                                        {v.title}
                                    </Typography>
                                    <Typography variant="h6" className='icon'>
                                        <TrendingFlatIcon />
                                    </Typography>
                                </div>
                                <Typography variant="body2" className='slogan'>
                                    {v.slogan}
                                </Typography>
                                </div>

                            </Box>
                        ))
                    }
                </Container>
            </React.Fragment>
        </div>
    )
}

export default YoungsFavourite;