import { Story, Meta } from '@storybook/react/types-6-0'
import Select, { ISelect } from '../components/Select/Select'

const Template: Story<ISelect> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Select',
  options: [
    { label: 'item 1', value: 'item 1' },
    { label: 'item 2', value: 'item 2' },
  ],
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Multi Select',
  options: [
    { label: 'item 1', value: 'item 1' },
    { label: 'item 2', value: 'item 2' },
  ],
}

export default {
  title: 'Example/Select',
  component: Select,
  argTypes: {},
} as Meta
