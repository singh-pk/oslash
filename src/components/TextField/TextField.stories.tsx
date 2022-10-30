import { ComponentStory, ComponentMeta } from '@storybook/react';

import { STORIES_PATH } from 'constants/storiesPath';

import TextField from '.';

export default {
  title: `${STORIES_PATH.COMPONENTS}/TextField`,
  component: TextField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yGNkrEsc69Zqyx5cWSKiT3/Front-end-assignment?node-id=1%3A1584'
    }
  }
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  inputProps: { placeholder: 'People, emails, groups' },
  buttonProps: { label: 'Invite' }
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  inputProps: {
    placeholder: 'Search emails, names or groups'
  },
  buttonProps: { label: 'Invite' },
  dropdownProps: {
    options: [
      { label: 'Full Access', value: 'Full Access' },
      { label: 'Can View', value: 'Can View' },
      { label: 'Can Edit', value: 'Can Edit' },
      { label: 'No Access', value: 'No Access' }
    ]
  }
};
