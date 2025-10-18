import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import e from '../images/email.png';
import g from '../images/github.png';

function addPerson(name: string, image: string, role: string, link: string, type: string) {
    let typeImage = type === "Github" ? g : e;
    return { name, image, role, link, type, typeImage};
}

const directors = [
    addPerson('Emily Markova', '/TeamImages/MVHacks 8.0/emily.jpg', 'Director', 'emily@mvhacks.io','Email'),
    addPerson('Yhali Matot', '/TeamImages/MVHacks 8.0/yhali.png', 'Sponsorship Director', 'yhali@mvhacks.io', 'Email'),
    addPerson('Nikita Narang', 'TeamImages/MVHacks 8.0/nikita.jpeg', 'Design Director', 'nikita@mvhacks.io', 'Email'),
    addPerson('Mirabel Wang', '/TeamImages/MVHacks 8.0/mirabel.jpg', 'Outreach Director', 'mirabelw@mvhacks.io','Email'),
    addPerson('Cinty Lin', '/TeamImages/MVHacks 9.0/Cinty Lin.jpg', 'Tech Director', 'cinty@mvhacks.io','Email'),
];

const tech = [
    addPerson('Emily Markova', '/TeamImages/MVHacks 8.0/emily.jpg', 'Tech Director', 'emily@mvhacks.io','Email'),
    addPerson('Noam Kassoff', '/TeamImages/MVHacks 8.0/noam.png', 'Member', 'https://github.com/noamkassoff','Github'),
    addPerson('Milo Lin', '/TeamImages/MVHacks 8.0/milo.jpeg', 'Member', 'milo@mvhacks.io','Email'),
    addPerson('Mia Ravishankar', '/TeamImages/MVHacks 8.0/mia.png', 'Member', 'miar@mvhacks.io','Email'),
    addPerson('Evelyn Yang', '/TeamImages/MVHacks 8.0/evelyn.JPG', 'Member', 'evelyny@mvhacks.io','Email'),
    addPerson('Jeremy Yu', '/TeamImages/MVHacks 8.0/jeremy.JPG', 'Member', 'https://github.com/jt31415','Github')
];

const outreach = [
    addPerson('Saahiti Bondalapati', '/TeamImages/MVHacks 8.0/saahiti.png', 'Outreach Director', 'saahiti@mvhacks.io', 'Email'),
    addPerson('Rohin Gupta', '/TeamImages/MVHacks 8.0/rohin.jpg', 'Member', 'rohin@mvhacks.io','Email'),
    addPerson('Nikita Narang', '/TeamImages/MVHacks 8.0/nikita.jpeg', 'Member', 'nikita@mvhacks.io','Email'),
    addPerson('Mirabel Wang', '/TeamImages/MVHacks 8.0/mirabel.jpg', 'Member', 'mirabelw@mvhacks.io','Email')
];

const sponsorship = [
    addPerson('Yhali Matot', '/TeamImages/MVHacks 8.0/yhali.png', 'Sponsorship Director', 'yhali@mvhacks.io', 'Email'),
    addPerson('Kirati Bollineni', '/TeamImages/MVHacks 8.0/kirati.png', 'Member', 'kiratib@mvhacks.io', 'Email'),
    addPerson('Ethan Chen', '/TeamImages/MVHacks 8.0/ethan.jpeg', 'Member', 'ethanc@mvhacks.io','Email'),
    addPerson('Owen Kim', '/TeamImages/MVHacks 8.0/owen.jpg', 'Member', 'owen@mvhacks.io','Email'),
    addPerson('Ishaan Sharma', '/TeamImages/MVHacks 8.0/ishaan.jpeg', 'Member', 'ishaan@mvhacks.io','Email'),
    addPerson('Henry Shih', '/TeamImages/MVHacks 8.0/henry.jpg', 'Member', 'henry@mvhacks.io','Email'),
    addPerson('Shankaran Srivatsa', '/TeamImages/MVHacks 8.0/shankaran.jpeg', 'Member', 'shankaran@mvhacks.io','Email'),
    addPerson('Ada Tulac', '/TeamImages/MVHacks 8.0/ada.jpg', 'Member', 'adat@mvhacks.io','Email')
];

const teams = [
    { name:"Directors", members: directors },
    { name:"Tech", members: tech },
    { name:"Outreach", members: outreach },
    { name:"Sponsorship", members: sponsorship }
];

export default function Team() {
    return (
        <div style={{ padding:'5%' }}>
            <Typography
                level='h2'
                sx={{
                    color:'#ffffff',
                    marginBottom:'2%',
                    textAlign:'center'
                }}
            >
                TEAM
            </Typography>

            {teams.map((team) => (
                <Table
                    key={team.name}
                    sx={{
                        backgroundColor:'#221a46',
                        marginTop:'2%',
                        color:'white',
                        border:'6px solid #c6add4',
                        overflow:'hidden',
                        '& td, & th': { 
                            padding:'12px 16px', 
                            fontSize:'1.1rem', 
                            wordWrap:'break-word', 
                            whiteSpace:'normal' 
                        },
                        '@media (max-width: 700px)': {
                            '& tr > td > div': {
                                display:'flex',
                                flexWrap:'wrap',
                                justifyContent:'space-evenly',
                                gap:'12px' 
                            },
                            '& tr > td > div > div': {
                                width:'46% !important',
                                margin:'0px !important',
                                display:'flex',
                                flexDirection:'column',
                                alignItems:'center',
                                gap:'2px'
                            },
                            '& tr > td > div > div img': {
                                height:'90px',
                                width:'90px',
                                objectFit:'cover'
                            },
                            '& tr > td > div > div > div:first-of-type': {
                                fontSize:'13px !important',
                                fontWeight:'bold',
                                color:'white',
                            },
                            '& tr > td > div > div > div:nth-of-type(2)': {
                                fontSize:'10px !important',
                                color:'grey',
                            }
                        }
                    }}
                >
                    <tbody> 
                        <tr>
                            <td
                                style={{
                                    fontSize:'20px',
                                    textTransform:'uppercase',
                                    padding:'12px 16px'
                                }}
                            >
                                {team.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div
                                    style={{
                                        display:'flex',
                                        flexWrap:'wrap',
                                        justifyContent:'center',
                                        gap:'16px'
                                    }}
                                >
                                    {team.members.map((member, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                textAlign:'center',
                                                justifyContent:'center',
                                                alignItems:'center',
                                                width:'45%',
                                                maxWidth:'180px',
                                                margin:'5px'
                                            }}
                                        >
                                            <img
                                                src={member.image}
                                                height="170px"
                                                width="170px"
                                                id="member"
                                                alt="member-image"
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div
                                                style={{
                                                    fontSize:'17px',
                                                    fontWeight:'bold',
                                                    color:'white'
                                                }}
                                            >
                                                {member.name}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize:'15px',
                                                    color:'grey'
                                                }}
                                            >
                                                {member.role}
                                            </div>
                                            <div>
                                                <Button
                                                    sx={{
                                                        borderRadius:'10px',
                                                        marginTop:'3%',
                                                        backgroundColor:'#c6add4',
                                                        height:'30px',
                                                        width:'170px',
                                                        '&:hover': {
                                                            backgroundColor:'#bb97cf'
                                                        },
                                                        '@media (max-width: 700px)': {
                                                            height:'20px', 
                                                            width:'90px',
                                                            fontSize:'13px',
                                                            padding:'0 8px',
                                                            '& img': {
                                                                height:'18px !important',
                                                                width:'18px !important'
                                                            }
                                                        }
                                                    }}
                                                    id="link"
                                                    component="a"
                                                    href={member.link}
                                                >
                                                    <img
                                                        src={member.typeImage}
                                                        height="25"
                                                        width="25"
                                                        id="member"
                                                        alt="member-link"
                                                        style={{ paddingRight: '10px' }} 
                                                    />
                                                    {member.type}
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            ))}
        </div>
    );
}