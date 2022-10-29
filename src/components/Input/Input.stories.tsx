import { ComponentStory, ComponentMeta } from '@storybook/react';

import { STORIES_PATH } from 'constants/storiesPath';

import Input from '.';

export default {
  title: `${STORIES_PATH.COMPONENTS}/Input`,
  component: Input,
  args: { placeholder: 'People, emails, groups' },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yGNkrEsc69Zqyx5cWSKiT3/Front-end-assignment?node-id=1%3A1584'
    }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Primary = Template.bind({});
