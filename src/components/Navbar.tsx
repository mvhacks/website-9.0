import "../App.css";
import Link from '@mui/joy/Link';

export default function Navbar({ onOptionSelect }: any) {
  return (
    <div>
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain"  onClick = {() => onOptionSelect('home')}>HOME</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain" >APPLY</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('info')}>INFO</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('schedule')}>SCHEDULE</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('sponsor')}>SPONSOR</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('faqs')}>FAQS</Link> 
      <Link component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('team')}>TEAM</Link> 
    </div>
  );
}