import "../App.css";
import logo from "../images/MVH8LogoOld.png";
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/icons-material/Menu';
import React, { useState, useEffect } from 'react';

export default function Navbar({ onOptionSelect }: any) {
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 830); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(inOpen);
  };

  const handleDrawerOption = (option: string) => {
    setDrawerOpen(false);
    onOptionSelect(option);
  }

  return (
    <div style={{width: "100%", backgroundColor: "transparent", zIndex: "10"}}>
      <div style={{display: "flex", marginLeft: "11%"}}>
        <img src={logo} alt="mvhackslogo" width="60" height="60" style={{marginLeft: "10px"}} />
        <Link overlay underline="none" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}} onClick = {() => onOptionSelect('home')}>
          <Typography sx={{color: "white", paddingLeft: "10%"}} level="h2">MV</Typography>
          <Typography sx={{color: "white", paddingLeft: "10%"}} level="h2" noWrap={true}>HACKS 8.0</Typography>
        </Link>
        {!isVisible && (<div>
          <IconButton variant="soft" color="neutral" size="md" sx={{position: "absolute", top: "3%", left: "2%" }} onClick={() => setDrawerOpen(true)}>
            <Menu />
          </IconButton>
          <Drawer open={drawerOpen} onClose={toggleDrawer(true)}>
            <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}>
              <ListItemButton sx={{ fontWeight: 'lg', color: 'black'}} onClick = {() => handleDrawerOption('home')}>Home</ListItemButton>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSefTr6730BXSMYYdAnDXS5hFu_NZ5FHyzNYkv2MYqZoxvkgyQ/viewform" sx= {{color: "black", justifyContent: 'center'}} level="body-lg">Apply</Link>
              <ListItemButton sx= {{color: "black"}} onClick = {() => handleDrawerOption('info')}>Info</ListItemButton>
              <ListItemButton sx= {{color: "black"}} onClick = {() => handleDrawerOption('schedule')}>Schedule</ListItemButton>
              <ListItemButton sx= {{color: "black"}} onClick = {() => handleDrawerOption('faqs')}>Faqs</ListItemButton>
              <ListItemButton sx= {{color: "black"}} onClick = {() => handleDrawerOption('sponsor')}>Sponsors</ListItemButton>
              <ListItemButton sx= {{color: "black"}} onClick = {() => handleDrawerOption('team')}>Team</ListItemButton>
            </List>
          </Drawer>
        </div>)}
      </div>
      {isVisible && (<div style={{marginLeft: "10%", marginTop: "2%"}}>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain"  onClick = {() => onOptionSelect('home')}>HOME</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} href="https://docs.google.com/forms/d/e/1FAIpQLSefTr6730BXSMYYdAnDXS5hFu_NZ5FHyzNYkv2MYqZoxvkgyQ/viewform" color="neutral" level="h2" underline="none" variant="plain">APPLY</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('info')}>INFO</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('schedule')}>SCHEDULE</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('faqs')}>FAQS</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('sponsor')}>SPONSORS</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('team')}>TEAM</Link>
      </div>)}
    </div>
  );
}