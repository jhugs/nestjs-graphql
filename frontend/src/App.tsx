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
    TextField,
} from "@material-ui/core";
import { useListBreweriesQuery } from "./graphql/autogenerate/hooks";

const useTableStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    form: {
        marginTop: 16,
        marginBottom: 16,
    },
});

function App() {
    const [searchText, setSearchText] = useState("");
    const [submittedSearch, setSubmittedSearch] = useState("");
    const [pageNumber, setPageNumber] = useState(0);

    const searchQuery = submittedSearch == "" ? undefined : submittedSearch;
    const [query] = useListBreweriesQuery({
        variables: { pageNumber: pageNumber + 1, searchText: searchQuery },
    });

    const classes = useTableStyles();
    const breweries = query.data?.breweries;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedSearch(searchText);
    };

    return (
        <div className="App">
            <form
                className={classes.form}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    type="search"
                    value={searchText}
                    onInput={(e) => setSubmittedSearch("")}
                    onChange={(e) => setSearchText(e.target.value ?? "")}
                />
            </form>
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
                        {breweries == null && "No results"}
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
