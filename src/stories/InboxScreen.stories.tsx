import { Meta, Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import React from "react";
import { InboxScreen } from "../components/InboxScreen";
import { Provider } from "react-redux";

const store: any = {
  getState: () => {
    return {
      tasks: [
        { id: "1", title: "Task 1", state: "TASK_INBOX" },
        { id: "2", title: "Task 2", state: "TASK_INBOX" },
        { id: "3", title: "Task 3", state: "TASK_INBOX" },
        { id: "4", title: "Task 4", state: "TASK_INBOX" },
        { id: "5", title: "Task 5", state: "TASK_INBOX" },
        { id: "6", title: "Task 6", state: "TASK_INBOX" },
      ],
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  title: "Inbox Screen",
  component: InboxScreen,
} as Meta;

const Template: Story = () => <InboxScreen />;

export const DefaultInboxScreen = Template.bind({});
