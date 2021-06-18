import React, { useState } from "react";
import "./App.css";
import {
    TableContainer,
    TableHead,
    TableCell,
    makeStyles,
    Table,
    Paper,
    TableRow,
    TableBody,
    Button,
} from "@material-ui/core";
import { useListBreweriesQuery } from "./graphql/autogenerate/hooks";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function App() {
    const [pageNumber, setPageNumber] = useState(0);
    const [query] = useListBreweriesQuery({
        variables: { pageNumber: pageNumber + 1 },
    });

    const classes = useStyles();
    const breweries = query.data?.breweries;

    // WIP: Just testing the query.
    // TODO: Setup routing and create a brewery page for listing, searching, etc.
    return (
        <div className="App">
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
                        {breweries == null && <div>No results</div>}
                        {breweries != null &&
                            !query.fetching &&
                            breweries.map((brewery: any) => (
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
                                    <TableCell align="right">
                                        {brewery.city ?? "--"}
                                    </TableCell>
                                    <TableCell align="right">
                                        {brewery.state ?? "--"}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <Button
                    disabled={pageNumber === 0}
                    onClick={() => setPageNumber((p) => --p)}>
                    Prev
                </Button>
                <Button
                    disabled={pageNumber > 0 && breweries == null}
                    onClick={() => setPageNumber((p) => ++p)}>
                    Next
                </Button>
            </TableContainer>
        </div>
    );
}

export default App;
