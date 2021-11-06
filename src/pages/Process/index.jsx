import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "../../plugin/axios";

function createData(command, pid, user, cpu, mem) {
  return { command, pid, user, cpu, mem };
}

const Process = () => {
  const [processList, processListSet] = useState([]);
  useEffect(() => {
    axios.get("/process").then(({ data }) => {
      const rows = data.list.map(({ command, pid, user, cpu, mem }) => {
        return createData(command, pid, user, cpu.toFixed(2), mem.toFixed(2));
      });
      processListSet(rows);
    });
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#1b2830",
      }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell align="right">PID</TableCell>
            <TableCell align="right">사용자 이름</TableCell>
            <TableCell align="right">CPU&nbsp;(%)</TableCell>
            <TableCell align="right">메모리&nbsp;(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {processList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.command}
              </TableCell>
              <TableCell align="right">{row.pid}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.cpu}</TableCell>
              <TableCell align="right">{row.mem}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Process;
