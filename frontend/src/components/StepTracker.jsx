import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';




export default function HorizontalLinearAlternativeLabelStepper() {
    const location = useLocation();
    const steps = [
        'Edit',
        'Banner',
        'Ticketing',
        'Review',
    ];

    const stepMap = {
        "/createEventEdit": 0, "/createEventBanner": 1, "/createEventTicketing": 2, "/createEventReview": 3
    }
    const activeStep = stepMap[location.pathname] ?? 0;
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
