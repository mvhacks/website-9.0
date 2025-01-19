import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import blank from '../images/Team/blank.jpeg';
import e from '../images/email.png';
import g from '../images/github.png';

function addPerson(name: string, image: string, role: string, link: string, type: string) {
    let typeImage = type === "Github" ? g : e;
    return { name, image, role, link, type, typeImage};
}

const directors = [
    addPerson('Alexandra Markova', 'https://i.imgur.com/BBWqwhs.jpeg', 'Director', 'https://github.com/kitkatmia','Github'),
    addPerson('Saahiti Bondalapati', 'https://i.imgur.com/16sqDdo.png', 'Outreach Director', 'saahiti@mvhacks.io','Email'),
    addPerson('Emily Markova', 'https://i.imgur.com/wTrB5jy.jpeg', 'Tech Director', 'https://github.com/emilymarkova','Github'),
    addPerson('Yhali Matot', blank, 'Sponsorship Director', 'alexm@mvhacks.io', 'Email'),
    addPerson('Arthur Cheong', blank, 'Emcee', 'arthurc@mvhacks.io','Email')
];

const tech = [
    addPerson('Emily Markova', 'https://i.imgur.com/wTrB5jy.jpeg', 'Tech Director', 'emily@mvhacks.io','Email'),
    addPerson('Noam Kassoff', 'https://i.imgur.com/YZLuaM4.png', 'Member', 'https://github.com/noamkassoff','Github'),
    addPerson('Milo Lin', 'https://i.imgur.com/QvoGuW5.jpeg', 'Member', 'milo@mvhacks.io','Email'),
    addPerson('Mia Ravishankar', blank, 'Member', 'miar@mvhacks.io','Email'),
    addPerson('Evelyn Yang', 'https://i.imgur.com/5b927dF.png', 'Member', 'evelyny@mvhacks.io','Email'),
    addPerson('Jeremy Yu', 'https://i.imgur.com/VNapq9L.png', 'Member', 'https://github.com/jt31415','Github')
];

const outreach = [
    addPerson('Saahiti Bondalapati', 'https://i.imgur.com/16sqDdo.png', 'Outreach Director', 'saahiti@mvhacks.io', 'Email'),
    addPerson('Rohin Gupta', blank, 'Member', 'rohin@mvhacks.io','Email'),
    addPerson('Nikita Narang', 'https://i.imgur.com/QC4s8O0.jpeg', 'Member', 'nikita@mvhacks.io','Email'),
    addPerson('Mirabel Wang', blank, 'Member', 'mirabelw@mvhacks.io','Email')
];

const sponsorship = [
    addPerson('Yhali Matot', blank, 'Sponsorship Director', 'alexm@mvhacks.io','Email'),
    addPerson('Kirati Bollineni', blank, 'Member', 'alexm@mvhacks.io', 'Email'),
    addPerson('Ethan Chen', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Owen Kim', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Henry Shih', 'https://i.imgur.com/XSFwbkK.jpeg', 'Member', 'henry@mvhacks.io','Email'),
    addPerson('Shankaran Srivatsa', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Kevin Thompson', blank, 'Member', 'alexm@mvhacks.io','Email'),
    addPerson('Ada Tulac', 'https://i.imgur.com/c26XLgw.jpeg', 'Member', 'adat@mvhacks.io','Email')
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