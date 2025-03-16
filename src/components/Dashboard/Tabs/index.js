import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid';
import "./style.css"
import List from '../List';

function Tabscomponent({coins}) {
    const [value, setValue] = React.useState('2');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const style={
        color:"var(--white)",
        width:"50vw",
        fontSize:"1.2rem",
        fontWeight:600,
        fontFamily:"Inter",
        textTransform:"capitalize"

    };
    const theme=createTheme({
        palette:{
            primary:{
                main:"#3a80e9",
            },
        },
    });
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="1" sx={style} />
            <Tab label="List" value="2" sx={style} />
          </TabList>
        <TabPanel value="1">
            <div className="grid-flex">{coins.map((coin,i)=>{
               return(
                <Grid coin={coin} key={i}></Grid>
               )
            })}</div>
        </TabPanel>
        <TabPanel value="2">
            <table className="list-table">{coins.map((coin,i)=>{
                return(
                    <List coin={coin} key={i} />
                )
            })}</table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  )
}

export default Tabscomponent
