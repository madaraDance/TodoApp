import { useState } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TodoList from './TodoList.jsx'


export const MuiTabs = () => {
    const [value, setValue ] = useState('1');

    const handleChange = (evenet, newValue) => {
        setValue(newValue);
    }

    return(
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Home" value="1" />
                        <Tab label="Todo" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">Welcome to the Todo web-page</TabPanel>
                <TabPanel value="2"><TodoList /></TabPanel>
            </TabContext>
        </Box>

    )
}

export default MuiTabs;