import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { IButton } from '../components/Button/Button'

const Template: Story<IButton> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  className: 'btn-purple-gradation',
  style: {},
  onClick: () => null,
  spinner: {
    color: 'black',
    size: '1.5rem',
    isLoading: true,
  },
  disabled: false,
  isLoading: false,
}

export const Outline = Template.bind({})
Outline.args = {
  label: 'Button',
  className: 'btn-purple-outline',
  style: {},
  onClick: () => null,
  spinner: {
    color: 'black',
    size: '1.5rem',
    isLoading: true,
  },
  disabled: false,
  isLoading: false,
}

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as Meta
