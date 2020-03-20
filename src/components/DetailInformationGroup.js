import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './DetailInformationGroup.css';

import MembreGroupeRock from "./MembreGroupeRock";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DetailInformationGroup({ description, members }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let currentMemberList = members.map((m, index) => (
    !m.ended  &&
      <MembreGroupeRock  membre={m} key={index} />
    
   
    
  ));

  let oldMemberList = members.map((m, index) => (
    m.ended  &&
    <MembreGroupeRock membre={m} key={index} />
  ));


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Description " {...a11yProps(0)} />
          <Tab label="Members" {...a11yProps(1)} />
          <Tab label="Former  members" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       {description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
          <Table className="table" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell >Instruments</TableCell>
                <TableCell >Begin</TableCell>
                <TableCell >End</TableCell>
                <TableCell >BirthDate</TableCell>
                <TableCell >Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentMemberList}
            </TableBody>
          </Table>
        </TableContainer>


      </TabPanel>
      <TabPanel value={value} index={2}>
        <TableContainer component={Paper}>
            <Table className="table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell >Instruments</TableCell>
                  <TableCell >Begin</TableCell>
                  <TableCell >End</TableCell>
                  <TableCell >BirthDate</TableCell>
                  <TableCell >Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {oldMemberList}
              </TableBody>
            </Table>
          </TableContainer>
      </TabPanel>
    </div>
  );
}
