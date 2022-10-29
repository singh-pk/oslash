import { ComponentStory, ComponentMeta } from '@storybook/react';

import { STORIES_PATH } from 'constants/storiesPath';

import ShareIcon from 'assets/Share.svg';

import Button from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: `${STORIES_PATH.COMPONENTS}/Button`,
  component: Button,
  argTypes: {
    icon: { control: { type: 'file', accept: 'image/*', multiple: false } }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yGNkrEsc69Zqyx5cWSKiT3/Front-end-assignment?node-id=1%3A1544'
    }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Share',
  icon: ShareIcon
};
