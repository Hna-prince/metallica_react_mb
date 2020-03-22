import React , { useState }  from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Accueil.css';
import ArtistList from './ArtistList';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const [artistsList, setArtistsList] = useState( [] );

   function getListArtistByAlphabet (alphabet)  {
      const url='https://wasabi.i3s.unice.fr/search/categorie/Artists/lettre/'+alphabet+'/page/0'
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {

        console.log(" GO GO SEARCH"+alphabet);
       
        setArtistsList(result.artists);
        console.log(artistsList);
      },
      (error) => {
      /*  this.setState({
          isLoaded: true,
          error
        });*/
        console.log("ERREUR FECTH");
      }
    )
  }

  let writeInSearchInput = (e) => {
      console.log("HELLLO");
  }
const alphabetList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  return (
    <div className='root'>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Artists" {...a11yProps(0)} />
          <Tab label="Albums" {...a11yProps(1)} />
          <Tab label="Songs" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
       <div className='artistALphabetContainer'>
        <ul className='alphabetLink' id="alphabet_Artists">
                          {  alphabetList.map((alphabet, index) => (
                            <li class="style-scope paper-tabs-content">
                                <a class="style-scope paper-tabs-content" href="#" onClick={() => getListArtistByAlphabet(alphabet) }>{alphabet} </a>
                            </li>
                        
                           ))}
                        <template is="dom-repeat" as="lettre" class="style-scope paper-tabs-content"></template>
                    </ul>
                    </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>

{ artistsList.length != 0 &&
      <ArtistList artists={artistsList} />
}
    </div>

  );
}
