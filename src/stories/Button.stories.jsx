import React from "react";

import Button from "../components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}> Mert baybagan </Button>;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  link: "wwww.google.com.tr",
};

export const Large = Template.bind({});
Large.args = {};
