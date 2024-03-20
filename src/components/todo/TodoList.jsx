import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TodoItem from "./TodoItem";
import { memo } from "react";

function TodoList({ items, onComplete, onChange, onDelete }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Todo</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          {items?.map((item) => (
            <TodoItem key={item?.id} item={item} onDelete={onDelete} onComplete={onComplete} onChange={onChange} />
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}

export default memo(TodoList);
