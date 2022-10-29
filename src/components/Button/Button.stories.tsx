import { ComponentStory, ComponentMeta } from '@storybook/react';

import { STORIES_PATH } from 'constants/storiesPath';

import ShareIcon from 'assets/Share.svg';

import Button from '.';

export default {
  title: `${STORIES_PATH.COMPONENTS}/Button`,
  component: Button,
  argTypes: {
    icon: { control: { type: 'file', accept: 'image/*' } }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yGNkrEsc69Zqyx5cWSKiT3/Front-end-assignment?node-id=1%3A1544'
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Share',
  icon: ShareIcon
};
