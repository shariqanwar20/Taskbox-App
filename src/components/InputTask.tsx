import React, { FormEvent, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, tasksList } from "./TaskSlice";

export const InputTask = () => {
  const tasks = useSelector(tasksList);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task !== "")
      dispatch(
        addTask({
          id: tasks.length !== 0 ? tasks[tasks.length - 1].id + 1 : 1,
          title: task,
        })
      );
  };
  return (
    <div className="input-task">
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3" style={{ margin: "0 15px" }}>
          <FormControl
            placeholder="How r u feeling today?"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <InputGroup.Append>
            <Button
              variant="outline-light"
              type="submit"
              style={{ marginLeft: "5px" }}
            >
              Add Task
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    </div>
  );
};
