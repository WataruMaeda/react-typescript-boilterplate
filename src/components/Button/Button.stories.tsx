import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from './Button'

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Button',
}

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta
