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


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
   
    
  },
  
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  media: {
    height: 140,
  },
  card: {
    maxWidth: 345,
 marginBottom: 50,
  },
  contentListSong :{
    maxHeight: 200, overflow: 'auto'
  }
}));


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Album({albumList}) {
  
  const classes = useStyles();
  return (
    
    <div className={classes.root}>
      <Grid container spacing={24} >
      {albumList.map(album => (
        <Grid item xs={3}>
            
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
                  {album.songs.map(song => (
                    <ListItem button>
                      <ListItemText primary={"1 - "+song.title} />
                    </ListItem>
                  ))}


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
      ))}
      </Grid>
    </div>
  );
}
