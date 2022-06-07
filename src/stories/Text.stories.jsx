import React from "react";
import { within, userEvent } from "@storybook/testing-library";

import Text from "../components/Text/Text";

const MENU = [
  {
    mode: "textmenu",
    text: "ERKEK",
  },
  {
    mode: "textmenu",
    text: "KADIN",
  },
  {
    mode: "textmenu",
    text: "COCUK",
  },
];

export default {
  title: "Example/Text",
  component: Text,
};
const Template = (args) => <Text {...args} />;

export const Logo = Template.bind({});
Logo.args = {
  mode: "Logo",
  text: "trendyol",
};

export const MMenuText = Template.bind({});
MMenuText.args = {
  mode: "MenuText",
  text: "KADIN",
};

export const AltMenuText = Template.bind({});
AltMenuText.args = {
  mode: "AltMenuText",
  text: "KADIN",
};

export const GreaySmallText = Template.bind({});
GreaySmallText.args = {
  mode: "GreaySmallText",
  text: "indirim",
};

export const CampaignSummary = Template.bind({});
CampaignSummary.args = {
  mode: "CampaignSummary",
  text: "L'oreal Paris & Maybelline New York & Garnier & NYX Professional Makeup",
};
