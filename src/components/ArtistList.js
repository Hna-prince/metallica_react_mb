import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  backgroundColor: '#f2f2f2',
  },
}));

export default function ArtistList({ artists }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       {artists.map( (arstist) => ( 
        <Grid key={arstist.name} item xs={3}>
          <Paper className={classes.paper}>{arstist.name}</Paper>
        </Grid>
       ))}
      </Grid>
    </div>
  );
}
