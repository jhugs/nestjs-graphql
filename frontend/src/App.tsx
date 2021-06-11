import React from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import {
  TableContainer,
  TableHead,
  TableCell,
  makeStyles,
  Table,
  Paper,
  TableRow,
  TableBody,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function App() {
  const breweriesQuery = gql`
    query GetBreweries {
      breweries {
        id
        name
        brewery_type
        street
        city
        state
      }
    }
  `;

  const classes = useStyles();
  const { loading, data } = useQuery(breweriesQuery);

  // WIP: Just testing the query.
  // TODO: Setup routing and create a brewery page for listing, searching, etc.
  return (
    <div className="App">
      {!loading && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Street</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">State</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.breweries != null &&
                data.breweries.map((brewery: any) => (
                  <TableRow key={brewery.id}>
                    <TableCell component="th" scope="row">
                      {brewery.name}
                    </TableCell>
                    <TableCell align="right">
                      {brewery.brewery_type ?? "--"}
                    </TableCell>
                    <TableCell align="right">
                      {brewery.street ?? "--"}
                    </TableCell>
                    <TableCell align="right">{brewery.city ?? "--"}</TableCell>
                    <TableCell align="right">{brewery.state ?? "--"}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default App;
