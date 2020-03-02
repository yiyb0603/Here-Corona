import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import "./Heal.scss";

const columns = [
  { id: "number", label: "환자번호", minWidth: 80, align: "left" },
  {
    id: "age",
    label: "출생년도",
    minWidth: 80,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "gender",
    label: "성별",
    minWidth: 80,
    align: "left",
    format: value => value.toLocaleString()
  },
  {
    id: "date",
    label: "격리 해제일",
    minWidth: 80,
    align: "left",
    format: value => value.toFixed(2)
  },
  {
    id: "path",
    label: "감염 경로",
    minWidth: 80,
    align: "left",
    format: value => value.toFixed(2)
  },
  {
    id: "etc",
    label: "비고",
    minWidth: 80,
    align: "left",
    format: value => value.toFixed(2)
  }
];

function createData(number, age, gender, date, path, etc) {
  return { number, age, gender, date, path, etc };
}

//환자번호	출생년도	성별	사망일	감염 경로	비고
const rows = [];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 600
  }
});

const Heal = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper className={classes.root} id="table2">
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Heal;
