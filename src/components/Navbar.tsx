import React from 'react';
import Link from '@mui/joy/Link';

export default function Navbar() {
  return (
    <div>
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain">HOME</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain">APPLY</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain">FAQS</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain">SPONSOR</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain">TEAM</Link> 
    </div>
  );
}