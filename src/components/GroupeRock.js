import React from "react";
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
import MembreGroupeRock from "./MembreGroupeRock";
import data from '../data/mettalica.json';

const GroupeRock = () => {
  let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
  ));

  return (
    <div className='root'>
    <Grid container spacing={3}>
    
    <Grid item xs={3}>
      <Paper className="paper">
      <img src={data.picture.medium} />
      xs=6</Paper>
    </Grid>
    <Grid item xs={9}>
      <Paper className="paper">xs=6</Paper>
    </Grid>
 
  </Grid>
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Date de naissance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{listeDesMembres}</TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default GroupeRock;
