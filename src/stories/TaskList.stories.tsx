import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { TaskList, TaskListProps } from "../components/TaskList";
import { Default } from "./Task.stories";

export default {
  title: "TaskList",
  component: TaskList,
} as Meta;

const Template: Story<TaskListProps> = (args) => <TaskList {...args} />;

export const DefaultTaskList = Template.bind({});
DefaultTaskList.args = {
  loading: false,
  tasks: [
    { ...Default.args, id: "1", title: "Task 1", state: "TASK_INBOX" },
    { ...Default.args, id: "2", title: "Task 2", state: "TASK_INBOX" },
    { ...Default.args, id: "3", title: "Task 3", state: "TASK_INBOX" },
    { ...Default.args, id: "4", title: "Task 4", state: "TASK_INBOX" },
    { ...Default.args, id: "5", title: "Task 5", state: "TASK_INBOX" },
    { ...Default.args, id: "6", title: "Task 6", state: "TASK_INBOX" },
  ],
};

export const PinnedTaskList = Template.bind({});
if (DefaultTaskList.args.tasks !== undefined) {
  PinnedTaskList.args = {
    loading: false,
    tasks: [
      ...DefaultTaskList.args.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  };
}

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  tasks: [],
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
