import './products.scss';
import { heroVector } from '../../assets';
import Card from '../card';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { heroImg } from '../../assets';

const productsArr = [
    {
        id: 123,
        title: "A beautiful girl in beautyfull abaya hai le lo ma jaldo!",
        slogan: "Explore now!",
        img: heroImg,
    },
    
    {
        id: 123,
        title: "A beautiful girl in beautyfull abaya hai le lo ma jaldo!",
        slogan: "Explore now!",
        img: heroImg,
    },
    {
        id: 123,
        title: "A beautiful girl in beautyfull abaya hai le lo ma jaldo!",
        slogan: "Explore now!",
        img: heroImg,
    },

]

export default function Cards() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" className='card-main'>
                <Box>
                    <div className='card-header'>
                        <span>
                            NEW ARRIVALS
                        </span>
                        <img src={heroVector} alt="vector" className='arrival-vector' />
                    </div>
                    <div className="card">
                        <Card productsArr={productsArr}/>
                    </div>
                </Box>
            </Container>
        </React.Fragment>
    );
}