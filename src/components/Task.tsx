import React from "react";
import { Paper, Typography, Checkbox } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { pinTask, archiveTask } from "./TaskSlice";
import { useDispatch } from "react-redux";

export interface TaskProps {
  id: string;
  title: string;
  state: string;
  // onPinAction?: (id: string) => void;
  // onArchiveAction?: (id: string) => void;
}
export const Task: React.FC<TaskProps> = ({
  id,
  title,
  state,
  // onPinAction,
  // onArchiveAction,
}) => {
  const dispatch = useDispatch();
  const defaultChecked = state === "TASK_ARCHIVED";
  return (
    <div
      className={state === "TASK_ARCHIVED" ? "disabled task" : "task"}
      style={{
        width: "50%",
        margin: "0 auto",
        marginBottom: "5px",
      }}
    >
      <Paper
        elevation={1}
        style={{ display: "flex", flexWrap: "wrap", padding: "5px" }}
        className="task"
      >
        <span>
          <Checkbox
            color="secondary"
            checked={defaultChecked}
            onChange={() => {
              if (state !== "TASK_ARCHIVED") {
                dispatch(archiveTask(id));
              }
            }}
          />
        </span>
        <span style={{ margin: "auto 0" }}>
          <Typography variant="subtitle1">{title}</Typography>
        </span>
        <span
          style={{ margin: "auto 0", marginLeft: "auto" }}
          onClick={() => {
            if (state !== "TASK_ARCHIVED") dispatch(pinTask(id));
          }}
          className="star-icon"
        >
          {state === "TASK_PINNED" ? (
            <StarIcon htmlColor="grey" />
          ) : (
            <StarBorderIcon htmlColor="grey" />
          )}
        </span>
      </Paper>
    </div>
  );
};
