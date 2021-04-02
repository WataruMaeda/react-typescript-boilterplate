import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { IButton } from './Button'

const Template: Story<IButton> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
}

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta
