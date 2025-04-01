import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid';
import "./style.css"
import List from '../List';
import Button from '../../common/Button';

function Tabscomponent({coins,setSearch}) {
    const [value, setValue] = React.useState('1');


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
            <div className="grid-flex">{coins.length>0?(coins.map((coin,i)=>{
               return(
                <Grid coin={coin} key={i} delay={(i%4)*0.2}></Grid>
               )
            })):(            <div>
              <h1 style={{ textAlign: "center" }}>
                Sorry, Couldn't find the coin you're looking for 😞
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem",
                }}
              >
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </div>
            </div>)}</div>
        </TabPanel>
        <TabPanel value="2">
            <table className="list-table">{coins.length>0?(coins.map((coin,i)=>{
                return(
                    <List coin={coin} key={i} delay={(i % 8) * 0.2}/>
                )
            })):(            <div>
              <h1 style={{ textAlign: "center" }}>
                Sorry, Couldn't find the coin you're looking for 😞
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "2rem",
                }}
              >
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </div>
            </div>)}</table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  )
}

export default Tabscomponent
