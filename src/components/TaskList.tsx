import React from "react";
import { Task, TaskProps } from "./Task";
import CheckIcon from "@material-ui/icons/Check";
import { Typography } from "@material-ui/core";

export interface TaskListProps {
  loading: boolean;
  tasks: TaskProps[];
  //   onPinAction?: (id: string) => void;
  //   onArchiveAction?: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  loading,
  tasks,
  //   onPinAction,
  //   onArchiveAction,
}) => {
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  //   const events = {
  //     onPinAction,
  //     onArchiveAction,
  //   };
  if (loading) {
    return (
      <div>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="centered text-center" style={{ color: "white" }}>
        <CheckIcon
          htmlColor="grey"
          fontSize="large"
          style={{ margin: "0 auto" }}
        />
        <div>
          <Typography variant="h5" gutterBottom>
            You have no tasks
          </Typography>
        </div>
        <div>
          <Typography variant="body1" gutterBottom>
            Sit back and relax
          </Typography>
        </div>
      </div>
    );
  }

  const sortedTasks = [
    ...tasks.filter((task) => task.state === "TASK_PINNED"),
    ...tasks.filter((task) => task.state !== "TASK_PINNED"),
  ];
  return (
    <div>
      {sortedTasks.map((task: TaskProps) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            state={task.state}
          />
        );
      })}
    </div>
  );
};
