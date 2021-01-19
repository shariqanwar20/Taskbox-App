import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { Task, TaskProps } from "../components/Task";

export default {
  title: "Task",
  component: Task,
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  title: "TEST TASK",
  state: "TASK_INBOX",
};

export const Pinned = Template.bind({});
Pinned.args = {
  id: "1",
  title: "TEST TASK",
  state: "TASK_PINNED",
};

export const Archived = Template.bind({});
Archived.args = {
  id: "1",
  title: "TEST TASK",
  state: "TASK_ARCHIVED",
};
