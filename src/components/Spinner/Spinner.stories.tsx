import { Story, Meta } from '@storybook/react/types-6-0'
import Spinner, { ISpinner } from './Spinner'

const Template: Story<ISpinner> = (args) => <Spinner {...args} />

export const Clip = Template.bind({})
Clip.args = {
  type: 'clip',
  color: 'orange',
  isLoading: true,
}

export const Beat = Template.bind({})
Beat.args = {
  type: 'beat',
  color: 'orange',
  isLoading: true,
}

export default {
  title: 'Example/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta
