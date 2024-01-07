import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  Avatar,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';

const links = [
  {name: 'Home', link: '/'},
  {name: 'About', link: '/about'},
  {name: 'Group Contracts', link: '/group-contracts'},
]

const settings = ['Preferences', 'Logout']

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const router = useRouter();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuClick = (page: string) => {
    handleCloseUserMenu();
    if (page === 'Preferences') {
      router.push('/preferences')
    } else if (page === 'Logout') {
      router.push('/logout')
    }
  }

  return (
    <AppBar position="static" sx={{backgroundColor: 'primary.main'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Box sx={{py: 2, pr: 2}}>
              <Link href="/" passHref>
                <Image src="/WhiteLogo.png" alt="logo" width={250} height={150}/>
              </Link>
            </Box>
            {links.map((link) => (
              <Link href={link.link} key={link.name} passHref>
                <Button sx={{my: 2, color: 'white', display: 'block', py: 2}}>
                  {link.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {links.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{flexGrow: 0}}>
            <>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                  <Avatar alt="User Avatar" sx={{backgroundColor: 'primary.light'}}>
                    <PersonIcon/>
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}