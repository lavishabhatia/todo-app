// import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextArea from "@mui/material/TextField";

import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

import Checkbox from "@mui/material/Checkbox";
import { memo, useState } from "react";

import Button from "../../ui/Button";

function TodoItem({ item, onComplete, onDelete, onChange }) {
  const [edit, setEdit] = useState();
  const [todo, setTodo] = useState();

  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={item?.completed} onClick={() => onComplete(item?.id)} />
        {edit ? (
          <TextArea
            defaultValue={item?.name}
            onChange={(e) => setTodo(e.target.value)}
          />
        ) : (
          <>{item?.name}</>
        )}
      </TableCell>
      <TableCell>
        <div className="  flex items-center gap-4">
          <Button variant="outlined" onClick={() => setEdit(!edit)}>
            {edit ? <CloseIcon color="error" /> : <EditIcon />}
          </Button>

          {edit && (
            <Button
              variant="contained"
              onClick={() => {
                onChange(item?.id, todo);
                setEdit(false);
              }}
            >
              <DoneIcon color="action" />
            </Button>
          )}

          <Button variant="outlined" onClick={() => onDelete(item?.id)}>
            <DeleteIcon color="error" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default memo(TodoItem);
