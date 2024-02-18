import './brands.scss'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { brandsImageArr } from '../../assets';
import CssBaseline from '@mui/material/CssBaseline';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function Brands() {

    
    return (
        <>
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
        </>
    );
}



