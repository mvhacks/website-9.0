import "../App.css";
import logo from "../images/mvhackslogo.png";
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import React from 'react';

export default function Navbar({ onOptionSelect }: any) {
  return (
    <div style={{position: "fixed", backgroundColor: "black"}}>
      <div style={{display: "flex", paddingLeft: "9%", paddingTop: "3%"}}>
        <img src={logo} width="60" height="60" />
        <Link overlay underline="none" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}} onClick = {() => onOptionSelect('home')}>
          <Typography sx={{color: "white", paddingLeft: "10%"}} level="h2">MV</Typography>
          <Typography sx={{color: "white", paddingLeft: "10%"}} level="h2" noWrap={true}>HACKS 8.0</Typography>
        </Link>
      </div>
      <div>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain"  onClick = {() => onOptionSelect('home')}>HOME</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" >APPLY</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('info')}>INFO</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('schedule')}>SCHEDULE</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('sponsor')}>SPONSOR</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('faqs')}>FAQS</Link>
        <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('team')}>TEAM</Link>
      </div>
    </div>
  );
}