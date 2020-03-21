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
import { blue } from 'color-name';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:'white',
    
  },
  
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
    backgroundColor:'#f2f2f2',
  },
  card: {
    width: 300,
    height: '410px',
 marginBottom: 50,
  },
  contentListSong :{
    maxHeight: 200, overflow: 'auto'
  },
  albumTitle: {
   backgroundColor:'#3f51b5',
   color: 'white',
   fontSize: '25px',
  },

  albumContainer:{
    marginRight:'14px',
    marginLeft:'14px',
  }
}));


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Album({albumList}) {
  
  const classes = useStyles();
  return (
    
    <div className={classes.root}>
    <div className={classes.albumTitle} > <p> Albums</p></div>
    <div className={classes.albumContainer}>
      <Grid container spacing={2} >
      {albumList.map(album => (
        <Grid item >
            
          <Card  className={classes.card}  >
            <CardActionArea>
              <CardMedia 
                className={classes.media}
                image={ album.cover !=undefined  &&  album.cover.medium}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                
                  {album.title}
                  
                  
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.contentListSong} >
                
                <List component="nav" aria-label="secondary mailbox folders">
                  {album.songs.map((song, index) => (
                    <ListItem button>
                      <ListItemText primary={(index+1)+"- "+song.title} />
                    </ListItem>
                  ))}


                  {/*<ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemLink>*/}
                </List>
                
                </Typography>
              </CardContent>
            </CardActionArea>
          {/*  <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
          </CardActions>*/}
          </Card>
    
        </Grid>
      ))}
      </Grid>
   </div>
   </div>
  );
}
