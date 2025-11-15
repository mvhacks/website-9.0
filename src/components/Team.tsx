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
    addPerson('Emily Markova', '/TeamImages/MVHacks 9.0/emily.jpg', 'Head Director', 'mailto:emily@mvhacks.io','Email'),
    addPerson('Cinty Lin', '/TeamImages/MVHacks 9.0/Cinty Lin.jpg', 'Tech Director', 'mailto:cinty@mvhacks.io','Email'),
    addPerson('Mirabel Wang', '/TeamImages/MVHacks 9.0/mirabel.jpg', 'Outreach Director', 'mailto:mirabelw@mvhacks.io','Email'),
    addPerson('Yhali Matot', '/TeamImages/MVHacks 9.0/yhali.png', 'Sponsorship Director', 'mailto:yhali@mvhacks.io', 'Email'),
    addPerson('Nikita Narang', 'TeamImages/MVHacks 9.0/nikita.jpeg', 'Design Director', 'mailto:nikita@mvhacks.io', 'Email'),
];

const tech = [
    addPerson('Cinty Lin', '/TeamImages/MVHacks 9.0/Cinty Lin.jpg', 'Tech Director', 'mailto:cinty@mvhacks.io','Email'),
    addPerson('Shankaran Srivatsa', '/TeamImages/MVHacks 9.0/Shankaran Srivatsa.jpeg', 'Member', 'mailto:shankaran@mvhacks.io','Email'),
    addPerson('Kaitlyn Yoon', '/TeamImages/MVHacks 9.0/Kaitlyn Yoon.jpg', 'Member', 'mailto:kaitlyny@mvhacks.io','Email'),
    addPerson('Olivia Nam', '/TeamImages/MVHacks 9.0/Olivia Nam.jpg', 'Member', 'mailto:olivian@mvhacks.io','Email'),
    addPerson('Evelyn Yang', '/TeamImages/MVHacks 9.0/Evelyn Yang.jpg', 'Member', 'mailto:evelyny@mvhacks.io','Email'),
];

const outreach = [
    addPerson('Mirabel Wang', '/TeamImages/MVHacks 9.0/mirabel.jpg', 'Outreach Director', 'mailto:mirabelw@mvhacks.io', 'Email'),
    addPerson('Yeonu Lee', '/TeamImages/MVHacks 9.0/Yeonu Lee.png', 'Member', 'mailto:yeonul@mvhacks.io','Email'),
    addPerson('Lucas Kirazci', '/TeamImages/MVHacks 9.0/Lucas Kirazci.jpg', 'Member', 'mailto:','Email'),
];

const sponsorship = [
    addPerson('Yhali Matot', '/TeamImages/MVHacks 9.0/yhali.png', 'Sponsorship Director', 'mailto:yhali@mvhacks.io', 'Email'),
    addPerson('Aarush Rajagopalan', '/TeamImages/MVHacks 9.0/Aarush Rajagopalan.jpeg', 'Member', 'mailto:aarushr@mvhacks.io', 'Email'),
    addPerson('Kirati Bollineni', '/TeamImages/MVHacks 9.0/Kirati Bollineni.jpeg', 'Member', 'mailto:kiratib@mvhacks.io', 'Email'),
    addPerson('Ishaan Sharma', '/TeamImages/MVHacks 9.0/Ishaan Sharma.jpeg', 'Member', 'mailto:ishaan@mvhacks.io','Email'),
    addPerson('Amyra Kedia', '/TeamImages/MVHacks 9.0/Amyra Kedia.jpeg', 'Member', 'mailto:amyra@mvhacks.io','Email')
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