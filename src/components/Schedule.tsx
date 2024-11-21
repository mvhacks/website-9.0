import React from "react";
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';

function createData(
    time: string,
    event: string,
) {
    return { event, time};
}
  
const rows = [
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
    createData('00:00', 'Event'),
];

export default function Faqs() {
    return (
        <div style= {{padding: '22%'}}>
            <Typography level='h2'
                sx={{ 
                    color: '#ffffff', 
                    marginBottom: '2%', 
                    marginRight: '0.7%',
                    marginLeft: '0.7%',
                    textAlign: "center" 
                }}
            >
                EVENT SCHEDULE
            </Typography>
            <Table hoverRow
                sx={{
                    backgroundColor: '#221a46',
                    color: 'white !important',
                    border: '6px solid #c6add4',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    '& td': {
                        padding: '12px 16px',
                        fontSize: '1.1rem',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal',
                    },
                    '& tr': {
                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                    },
                    '& tr:hover': {
                        backgroundColor: 'rgba(158, 138, 169, 0.6) !important',
                        boxShadow: '0 0 12px rgba(198, 173, 212, 0.6)',
                    },
                }}
            >
            <tbody>
                {rows.map((row) => (
                <tr key={row.time}>
                    <td>{row.time}</td>
                    <td>
                        <Typography
                            sx={{
                                textAlign: "right",
                            }}
                        >
                            {row.event}
                        </Typography>
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
    );
}