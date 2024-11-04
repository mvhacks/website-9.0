import React from "react";
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function Faqs() {
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <AccordionGroup>
                <Accordion>
                    <AccordionSummary>
                        FAQ 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 1
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        FAQ 2
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 2
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        FAQ 3
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 3
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        FAQ 4
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 4
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        FAQ 5
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 5
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        FAQ 6
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 6
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        FAQ 7
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 7
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        FAQ 8
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 8
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        FAQ 9
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 9
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        FAQ 10
                    </AccordionSummary>
                    <AccordionDetails>
                        Answer 10
                    </AccordionDetails>
                </Accordion>
            </AccordionGroup>
        </div>
    );
}