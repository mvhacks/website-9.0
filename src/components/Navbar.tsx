import "../App.css";
import Link from '@mui/joy/Link';

export default function Navbar({ onOptionSelect }: any) {
  return (
    <nav>
      <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain"  onClick = {() => onOptionSelect('home')}>HOME</Link>
      <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" >APPLY</Link>
      <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('info')}>INFO</Link>
      <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('schedule')}>SCHEDULE</Link>
      <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('sponsor')}>SPONSOR</Link>
      <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('faqs')}>FAQS</Link>
      <Link style = {{margin: 10, color: "white", paddingLeft: 10}} component="button" color="neutral" level="h2" underline="none" variant="plain" onClick = {() => onOptionSelect('team')}>TEAM</Link>
    </nav>
  );
}