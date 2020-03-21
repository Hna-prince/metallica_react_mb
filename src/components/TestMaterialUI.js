import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import "./Album.css";
/*const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
   
    
  },
  
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  media: {
    height: 140,
  },
  paper: {
    maxWidth: 345,
 marginBottom: 50,
  },
  contentListSong :{
    maxHeight: 200, overflow: 'auto'
  }
}));
*/
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Album() {
 {/*} const classes = useStyles();*/}

  return (
    
    <div className="root">
      <Grid container spacing={24} >
        <Grid item xs={3}>
            
          <Card  className="paper"  >
            <CardActionArea>
              <CardMedia
                className="media"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className="contentListSong">
                
                <List component="nav" aria-label="secondary mailbox folders">
                  <ListItem button>
                    <ListItemText primary="1 . efzefz" />
                  </ListItem>
                  <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemLink>
                </List>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
    
        </Grid>
          
      </Grid>
    </div>
  );
}
