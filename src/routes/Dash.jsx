import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {  Box,  } from '@mui/material';
import Chart from '../component/Chart';
import TableData from '../component/TableData';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div  >{children}</div>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Dash = () => {
  const [value, setValue] = React.useState(0);
  const [stock, setStock] = React.useState([])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    fetch("https://reidnax-ttoy.onrender.com/getStock")
      .then(res => res.json())
      .then(data => setStock(data.allStocks))
      .catch(e => console.log(e));
  }, [])

  return (
    <div >
      <p className='bg-gray-400 text-4xl max-lg:text-2xl'>DashBoard</p>

      <Box className=""
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', }}
          className=' w-24'
        >
          <Tab label="Analytics" {...a11yProps(0)} />
          <Tab label="Data" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0} className="w-full h-full">
          <div className='h-screen w-full'>
            <Chart data={stock} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} >
          <div className='h-screen '>
            <TableData data={stock} />
          </div>
        </TabPanel>

      </Box >
<p className='text-4xl text-center'>Amit Kumar,7860519627 </p>
    </div>


  )
}

export default Dash
