import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import '../Styles/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import ausBG from '../Images/aus.jpg';
import headshotPicture from '../Images/homeHeadshot.jpg';
import instagramIcon from '../Images/Socials/instagram.png';
import linkedInIcon from '../Images/Socials/linkedin.png';
import soundcloudIcon from '../Images/Socials/soundcloud.png';
import twitterIcon from '../Images/Socials/twitter.png';
import youtubeIcon from '../Images/Socials/youtube.png';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color: '#FFFFFF',
    backgroundImage:`url(${ausBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
  },
  drawerCanvas: {
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  largeAvatar: {
    backgroundImage: `url(${headshotPicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    width: theme.spacing(20),
    height: theme.spacing(20),
    left: '17%',
    top: '-4%',
  },
  socialsAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function SideNavbar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="removeScrollbar">
      <div className={classes.toolbar} />

      <Avatar alt="Headshot Picture" variant="square" className={classes.largeAvatar}> </Avatar>
      
      <Grid container justify="center" spacing={1}>
        <Grid item> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bdulyy/"> <Avatar alt="" className={classes.socialsAvatar} src={instagramIcon}/> </a> </Grid>
        <Grid item> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brittanyduly/"> <Avatar alt="" className={classes.socialsAvatar} src={linkedInIcon}/> </a> </Grid>
        <Grid item> <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/brittany-du-ly"> <Avatar alt="" className={classes.socialsAvatar} src={soundcloudIcon}/> </a> </Grid>
        <Grid item> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/brittanyduly"> <Avatar alt="" className={classes.socialsAvatar} src={twitterIcon}/> </a> </Grid>
        <Grid item> <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCRpeolQmbmAHyc_3ZAiA-ZQ"> <Avatar alt="" className={classes.socialsAvatar} src={youtubeIcon}/> </a> </Grid>
      </Grid>

      <p align="center" className="RalewayRegular bioColor textPadding">
        <span className="RalewayThin name"> Brittany Du Ly </span> <br/>
        <span className="RalewayThinItal jobTitle"> Digital Reporter, Journalist </span> <br/><br/>
        From helping her dad film on 
        his 1997 JVC camcorder, to shooting short and long-form
        content now, she is easily inspired when mixing her
        her passion for media with the art of telling a good story. 
      </p>

      <div>
        <Grid className="topPadding" container justify="center"> <Grid className="slightPadding" item> <a className="navbarTitle hyperlinkStyling" href="#Articles"> Articles </a> </Grid> </Grid>
        <Grid container justify="center"> <Grid className="slightPadding" item> <a className="navbarTitle hyperlinkStyling" href="#Media"> Media </a> </Grid> </Grid>
        <Grid container justify="center"> <Grid className="slightPadding" item> <a className="navbarTitle hyperlinkStyling" href="#OAR"> On-Air Reports </a> </Grid> </Grid>
        <Grid container justify="center"> <Grid className="slightPadding" item> <a className="navbarTitle hyperlinkStyling" href="#Contact"> Contact </a> </Grid> </Grid>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,

            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
