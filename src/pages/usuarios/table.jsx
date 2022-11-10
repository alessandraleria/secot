import * as React from "react";

import { useNavigate } from "react-router-dom";

import API from "../../services/api";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Nome" },
  { id: "email", label: "E-mail" },
  { id: "roles", label: "Nível" },
  { id: "city", label: "Cidade" },
  { id: "state", label: "Estado" },
  { id: "job", label: "Trabalho" },
  { id: "area", label: "Área" },
  { id: "university", label: "Universidade" },
  { id: "course", label: "Curso" },
  { id: "interests", label: "Interesses" },
];

export default function UserTable(route) {
  console.log(route);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get("user");
        setData(response?.data);
      } catch (err) {
        console.log("Erro: ", err);
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  const [data, setData] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        onClick={() => navigate("/cadastrar-usuario")}
        variant="outlined"
        color="error"
        sx={{ margin: 2, alignSelf: "end" }}
      >
        Adicionar
      </Button>
      <TableContainer sx={{ height: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
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
            {data.length > 0 ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      onClick={console.log(row)}
                    >
                      {columns.map((column) => {
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
                })
            ) : (
              <TableRow></TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
