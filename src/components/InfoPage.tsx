import "../App.css";
import Typography from '@mui/joy/Typography';
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import bubbleImg from '../images/bubble.png';

export default function InfoPage() {
  const [isMobile, setIsMobile] = useState<Boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 830); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      {!isMobile && (
        <div style={{ marginTop: '40vh', display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 1000, padding: '0 20px', width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.6 } }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ marginTop: 0, marginBottom: 20 }}
            >
              <motion.div
                aria-label="Where Boundaries Fade and Ideas Flourish"
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 320,
                  height: 320,
                  backgroundImage: `url(${bubbleImg})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 75,
                  color: '#ffffff',
                }}
              >
                <Typography level="h3" sx={{ color: '#1800ad', fontWeight: 600, mb: 1 }}>{'Where Boundaries Fade and Ideas Flourish'}</Typography>
                <Typography level="body-md" sx={{ color: '#2c2c2c' }}>{'MVHacks is proud to give a platform for aspiring tech enthusiasts to grow and learn by making unique projects that progress society.'}</Typography>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ marginTop: 0, marginBottom: 20, marginLeft: 'auto' }}
            >
              <motion.div
                aria-label="Workshops and advice to help you grow"
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 360,
                  height: 360,
                  backgroundImage: `url(${bubbleImg})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 75,
                  color: '#ffffff',
                }}
              >
                <Typography level="h3" sx={{ color: '#1800ad', fontWeight: 600, mb: 1 }}>{'Workshops and advice to help you grow'}</Typography>
                <Typography level="body-md" sx={{ color: '#2c2c2c' }}>{"With specialized judges that are currently in the tech industry, at MVHacks you'll receive the best feedback to help you improve."}</Typography>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.6 } }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ marginTop: 0 }}
            >
              <motion.div
                aria-label="Real world collaboration and innovation"
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 320,
                  height: 320,
                  backgroundImage: `url(${bubbleImg})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 75,
                  color: '#ffffff',
                }}
              >
                <Typography level="h3" sx={{ color: '#1800ad', fontWeight: 600, mb: 1 }}>{'Real world collaboration and innovation'}</Typography>
                <Typography level="body-md" sx={{ color: '#2c2c2c' }}>{'The MVHacks schedule is currently in development, but expect team-building exercises, workshops, and challenges!'}</Typography>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
  {isMobile && (<div style={{marginTop: "40vh"}}>
        <motion.div
          initial={{ opacity: 0, y: 40}}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6}}}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              aria-label="Where Boundaries Fade and Ideas Flourish"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 280,
                height: 280,
                minWidth: 200,
                minHeight: 200,
                backgroundImage: `url(${bubbleImg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 65,
                color: '#ffffff',
              }}
            >
              <Typography level="h4" sx={{ color: '#1800ad', fontWeight: 600, mb: 1 }}>{'Where Boundaries Fade and Ideas Flourish'}</Typography>
              <Typography level="body-sm" sx={{ color: '#2c2c2c' }}>{'MVHacks is proud to give a platform for aspiring tech enthusiasts to grow and learn by making unique projects that progress society.'}</Typography>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40}}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.6}}}
          viewport={{ once: true, amount: 0.3 }}
          style={{ marginTop: 24 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              aria-label="Workshops and advice to help you grow"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 280,
                height: 280,
                minWidth: 200,
                minHeight: 200,
                backgroundImage: `url(${bubbleImg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 65,
                color: '#ffffff',
              }}
            >
              <Typography level="h4" sx={{ color: '#1800ad', fontWeight: 600, mb: 1 }}>{'Workshops and advice to help you grow'}</Typography>
              <Typography level="body-sm" sx={{ color: '#2c2c2c' }}>{"With specialized judges that are currently in the tech industry, at MVHacks you'll receive the best feedback to help you improve."}</Typography>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40}}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6}}}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              aria-label="Real world collaboration and innovation"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 280,
                height: 280,
                minWidth: 200,
                minHeight: 200,
                backgroundImage: `url(${bubbleImg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 65,
                color: '#ffffff',
              }}
            >
              <Typography level="h4" sx={{ color: '#1800ad', fontWeight: 600, mb: 1 }}>{'Real world collaboration and innovation'}</Typography>
              <Typography level="body-sm" sx={{ color: '#2c2c2c' }}>{'The MVHacks schedule is currently in development, but expect team-building exercises, workshops, and challenges!'}</Typography>
            </motion.div>
          </div>
        </motion.div>
      </div>)}
    </div>
  );
}