import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./header.scss";


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', { label: 'Sign up', className: 'signup-button' }];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className="header">
      <Typography variant="h6" sx={{ my: 2 }}>
        Fashion
      </Typography>
      <Divider />
      {navItems.map((item, i) => (
        <List key={i}>
          <Button
            key={item.label || item}
            sx={{ color: item.label === 'Sign up' ? '#fff' : '' }}
            className={`${item.className} nav-menu`}
          >
            {item.label || item}
          </Button>
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
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Fashion
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.label || item}
                  sx={{ color: item.label === 'Sign up' ? '#fff' : '' }}
                  className={`${item.className} nav-menu`}
                >
                  {item.label || item}
                </Button>
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

export default Header;