import React from "react";
import { TaskList } from "./TaskList";
import { useSelector } from "react-redux";
import { TaskProps } from "./Task";
import { tasksList } from "./TaskSlice";
import { InputTask } from "./InputTask";

export const InboxScreen = () => {
  //A title bar display h1 heading TaskBox
  //TaskList
  const tasks: TaskProps[] = useSelector(tasksList);
  return (
    <div>
      <h1 className="text-center heading">TaskBox</h1>
      <br />
      <InputTask />
      <br />
      <TaskList loading={false} tasks={tasks} />
    </div>
  );
};
