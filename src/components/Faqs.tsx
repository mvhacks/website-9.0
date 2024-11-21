import React from "react";
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Typography from '@mui/joy/Typography';
  
export default function Faqs() {
    return (
        <div style={{ padding: '2%'}}>
            <Typography level="h2" 
                sx={{ 
                    color: '#ffffff', 
                    marginBottom: '2%', 
                    marginRight: '0.7%',
                    marginLeft: '0.7%',
                    textAlign: "center" 
                }}
            >
                FREQUENTLY ASKED QUESTIONS
            </Typography>
            <AccordionGroup
                sx={{
                    backgroundColor: 'transparent',
                    color: 'white !important',
                    marginLeft: "10%",
                    marginRight: "10%",
                    '& .MuiAccordion-root': {
                        backgroundColor: 'transparent',
                    },
                    '& button:hover': {
                        backgroundColor: '#221a46 !important',
                    },
                }}
            >
                <Accordion>
                    <AccordionSummary
                        sx={{
                            backgroundColor: 'transparent',
                            color: 'white !important',
                            '& .MuiAccordion-root': {
                                backgroundColor: 'transparent',
                            },
                            '& button:hover': {
                                backgroundColor: '#221a46 !important',
                            },
                        }}                              
                    >
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 1
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 1
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 2
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 2
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 3
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 3
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 4
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 4
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 5
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 5
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 6
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 6
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 7
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 7
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 8
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 8
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 9
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 9
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography
                            textColor = "common.white"
                            sx={{
                                fontWeight: "normal"
                            }}
                        >
                            FAQ 10
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ color: '#c6add4' }}>
                        Answer 10
                    </AccordionDetails>
                </Accordion>
            </AccordionGroup>
        </div>
    );
}