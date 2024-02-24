import "./style.scss";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logo } from '../assets'
import { NavLink } from 'react-router-dom'

const drawerWidth = 240;
const navItems = ['home', 'about', 'contact', { label: 'Sign up', className: 'signup-button' }];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // console.log(navItems.map(item => item.label || item))

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className="header">
      <Typography variant="h6" sx={{ my: 2 }} className='web-name'>
        Fashion
      </Typography>
      <Divider />
      {navItems.map((item, i) => (
        <List key={i}>
          <NavLink to={`/${item.label || item}`} key={item.label || item}>
            <Button
              
              sx={{ color: item.label === 'Sign up' ? '#fff' : '' }}
              className={`${item.className} nav-menu`}
            >
              {item.label || item}
            </Button>
          </NavLink>
        </List>
      ))}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <header className='header'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" className='navbar'>
          <Toolbar>
            <div className='burger-section'>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                {/* <MenuIcon /> */}
                <div className="hamburger">
                  <div className="hamburger__container">
                    <div className="hamburger__inner" />
                    <div className="hamburger__hidden" />
                  </div>
                </div>

              </IconButton>
              <IconButton
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <img src={logo} alt="logo" height='60px' />
              </IconButton>
            </div>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              className='web-name'
            >
              Fashion
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <NavLink to={`/${item.label || item}`} key={item.label || item}>
                  <Button
                    
                    sx={{ color: item.label === 'Sign up' ? '#fff' : '' }}
                    className={`${item.className} nav-menu`}
                  >
                    {item.label || item}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            className='nav-menu'
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </header>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Navbar;