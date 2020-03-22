import React from "react";
import "./MembreGroupeRock.css";


import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function formatArrayData(arraydata) {
  var formatData='';
  for (const  value of arraydata) {
    formatData=formatData+value+', ';
  }
  return formatData;
 };

const MembreGroupeRock = ({ membre }) => (
  

      <TableRow key={membre.name}>
        <TableCell component="th" scope="row">
        {membre.name}
        </TableCell>
        <TableCell align="right">{formatArrayData(membre.instruments)}</TableCell>
        <TableCell align="right">{membre.begin}</TableCell>
        <TableCell align="right">{membre.end}</TableCell>
        <TableCell align="right"> {membre.birthDate}</TableCell>
        <TableCell align="right">{membre.dbp_abstract}</TableCell>
      </TableRow>
  

);

export default MembreGroupeRock;
