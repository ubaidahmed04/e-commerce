import './../style.scss'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Footer() {
    return (
        <footer className='footer'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} className='section-one'>
                        <Typography variant='h4'>Fashion</Typography>
                        <Typography variant='body2'>Complete your style with awesome clothes from us.</Typography>
                        <Item className='icons'>
                            <InstagramIcon/>
                            <FacebookOutlinedIcon/>
                            <XIcon/>
                            <LinkedInIcon/>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} className='section-two'>
                        <Typography variant='h5'>Company</Typography>
                        <Item>About</Item>
                        <Item>Contact us</Item>
                        <Item>Support</Item>
                        <Item>Career</Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} className='section-three'>
                        <Typography variant='h5'>Quick Link</Typography>
                        <Item>Share Location</Item>
                        <Item>Order Tracking</Item>
                        <Item>Size Guide</Item>
                        <Item>FAQs</Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} className='section-four'>
                        <Typography variant='h5'>Legal</Typography>
                        <Item>Terms & Conditions</Item>
                        <Item>Privacy Policy</Item>
                    </Grid>

                </Grid>
            </Box>
        </footer>
    )
}

export default Footer