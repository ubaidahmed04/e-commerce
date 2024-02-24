import './style.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import { brandsImageArr } from '../assets';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Brands() {
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <section data-aos="fade-up">
            <React.Fragment>
                <CssBaseline />
                <Box sx={{ overflowX: 'scroll' }} className="brands">
                    <div className='brand-img'>
                        {brandsImageArr.map((image, i) => (
                            <div key={i}>
                                <img src={image} alt="brand-images" className="img" />
                            </div>
                        ))}
                    </div>
                </Box>
            </React.Fragment>
        </section>
    );
}



