import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Table.css";
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "hidden"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, ds, tcb, tca, tcw, scw) {
  id += 1;
  return { id, name, ds, tcb, tca, tcw, scw };
}

const rows = [
  createData(
    "Quick Sort",
    "Array",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(n^2)",
    "O(n)"
  ),
  createData(
    "Merge Sort",
    "Array",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(n)"
  ),
  createData(
    "Heap Sort",
    "Array",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(1)"
  ),
  createData(
    "Smooth Sort",
    "Array",
    "O(n)",
    "O(nlog(n))",
    "O(nlog(n))",
    "O(1)"
  ),
  createData("Bubble Sort", "Array", "O(n)", "O(n^2)", "O(n^2)", "O(1)"),
  createData("Insertion Sort", "Array", "O(n)", "O(n^2)", "O(n^2)", "O(1)"),
  createData("Selection Sort", "Array", "O(n^2)", "O(n^2)", "O(n^2)", "O(1)")
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Algorithm</TableCell>
            <TableCell>Data Structure</TableCell>
            <TableCell>TC(Best)</TableCell>
            <TableCell>TC(Average)</TableCell>
            <TableCell>TC(Worst)</TableCell>
            <TableCell>SC(Worst)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.ds}</TableCell>
                <TableCell numeric>{row.tcb}</TableCell>
                <TableCell numeric>{row.tca}</TableCell>
                <TableCell numeric>{row.tcw}</TableCell>
                <TableCell numeric>{row.scw}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
