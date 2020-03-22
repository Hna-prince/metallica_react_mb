import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import "./GroupeRock.css";

import metallica from "../data/mettalica";
//import data from '../data/mettalica';
import DetailInformationGroup from './DetailInformationGroup';
import Album from './Album';
import { render } from "@testing-library/react";
import CircularProgress from '@material-ui/core/CircularProgress';

function formatArrayData(arraydata) {
  var formatData='';
  for (const  value of arraydata) {
    console.log(" V "+value);
    formatData=formatData+value+', ';
  }
  return formatData;
 };

 class GroupeRock extends React.Component {
 
  
   loadGroupData=() =>{
    const url='https://wasabi.i3s.unice.fr/search/artist/'+this.groupName ;

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
        /*  this.setState({
            isLoaded: true,
            items: result.items
          });*/
          this.setState({
            isLoaded: true,
            data: result,
          });
          console.log(this.state.data);
        },
        (error) => {
        /*  this.setState({
            isLoaded: true,
            error
          });*/
          console.log("ERREUR FECTH");
        }
      )
  };
  
//const GroupeRock = () => {
  groupName;
  constructor(props) {
		super(props); 
    this.state = {
      isLoaded: false,
      data: {}
    };
    console.log("ID = " + props.match.params.name);
    this.groupName = props.match.params.name;

    console.log(" ????? "+this.state .data);
    this.loadGroupData();
  }
  componentDidMount() {
    
  }
  
 
render(){
  const { data, isLoaded } = this.state;
  return  (
    <>
    {isLoaded ?(
    <div className='root'>
    <Grid container spacing={3}>
    
    <Grid item xs={3}>
      <Paper className="paper">
      <img src= { data.picture !=undefined  ?  data.picture.medium : 'http://e-cdn-images.deezer.com/images/artist//250x250-000000-80-0-0.jpg'} />
      <h1>{data.name}</h1></Paper>
    </Grid>
    <Grid item xs={9}>
      
      
        <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          
          <TableBody>
              <TableRow key='1'>
               
                <TableCell align="left">Birthdate</TableCell>
                <TableCell align="left">{data.lifeSpan.begin}</TableCell>
              </TableRow>
              <TableRow key='2'>
               
               <TableCell align="left">Location</TableCell>
               <TableCell align="left">{formatArrayData(data.locationInfo)} </TableCell>
             </TableRow>
             <TableRow key='3'>
               
               <TableCell align="left">Label</TableCell>
               <TableCell align="left">{formatArrayData(data.labels)}</TableCell>
             </TableRow>
             <TableRow key='4'>
               
               <TableCell align="left">Genre</TableCell>
               <TableCell align="left">{data.lifeSpan.begin}</TableCell>
             </TableRow>
             <TableRow key='5'>
               
               <TableCell align="left">Deezer</TableCell>
               <TableCell align="left">{data.deezerFans}</TableCell>
             </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
      <nav className="externalLinks">
 <span  title="Wikipedia"><div><img src="https://wasabi.i3s.unice.fr/img/wikipedia_icon.svg" alt="Wikipedia"/></div></span>
 <span  title="Official website"><div><img src="https://wasabi.i3s.unice.fr/img/website_icon.svg" alt="Official website"/></div></span>
 <span title="Facebook"><div><img src="https://wasabi.i3s.unice.fr/img/facebook_icon.svg" alt="Facebook"/></div></span>
 <span title="MySpace"><div><img src="https://wasabi.i3s.unice.fr/img/myspace_icon.svg" alt="MySpace"/></div></span>
 <span  title="Twitter"><div><img src="https://wasabi.i3s.unice.fr/img/twitter_icon.svg" alt="Twitter"/></div></span>
 <span  title="Amazon"><div><img src="https://wasabi.i3s.unice.fr/img/amazon_icon.svg" alt="Amazon"/></div></span>
 <span  title="iTunes"><div><img src="https://wasabi.i3s.unice.fr/img/itunes_icon.svg" alt="iTunes"/></div></span>
 <span title="AllMusic"><div><img src="https://wasabi.i3s.unice.fr/img/allmusic_icon.svg" alt="AllMusic"/></div>
 </span><span  title="Discogs"><div><img src="https://wasabi.i3s.unice.fr/img/discogs_icon.svg" alt="Discogs"/></div></span>
 <span title="Music Brainz"><div><img src="https://wasabi.i3s.unice.fr/img/musicbrainz_icon.svg" alt="Music Brainz"/></div></span>
 <span  title="Youtube"><div><img src="https://wasabi.i3s.unice.fr/img/youtube_icon.svg" alt="Youtube"/></div></span>
 <span  title="Spotify"><div><img src="https://wasabi.i3s.unice.fr/img/spotify_icon.svg" alt="Spotify"/></div></span>
 <span  title="PureVolume"><div><img src="https://wasabi.i3s.unice.fr/img/purevolume_icon.svg" alt="PureVolume"/></div></span>
 <span title="RateYourMusic"><div><img src="https://wasabi.i3s.unice.fr/img/rateyourmusic_icon.svg" alt="RateYourMusic"/></div></span>
 <span title="SoundCloud"><div><img src="https://wasabi.i3s.unice.fr/img/soundcloud_icon.svg" alt="SoundCloud"/></div></span>
 </nav>
    </Grid>
 
  </Grid>



<DetailInformationGroup  description={data.abstract} members={data.members} />
  <Album albumList={data.albums}/>
    </div>
    ):(
      <div className='root'>
      <CircularProgress />
      </div>
    ) }
    </>
  );
}
//};

 }
export default GroupeRock;
