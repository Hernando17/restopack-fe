import React, { useRef, useEffect } from 'react';
import { Button, Input, Alert, Box, Tabs, Tab, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export function BasicTabs({ children, tab, tabcontent, changeContent }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        changeContent(newValue)
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }


    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    {
                        tab.map((item, index) => (
                            <Tab key={index} label={item.text} {...a11yProps(index)} />
                        ))
                    }
                </Tabs>
            </Box>
            <TabPanel value={value} index={tabcontent}>
                {children}
            </TabPanel>
        </Box>
    )
}