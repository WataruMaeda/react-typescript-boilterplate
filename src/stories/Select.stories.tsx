import { Story, Meta } from '@storybook/react/types-6-0'
import Select, { ISelect } from '../components/Select/Select'

const Template: Story<ISelect> = (args) => <Select {...args} />

export const Single = Template.bind({})
Single.args = {
  name: 'select',
  label: 'Single Select',
  value: { label: 'item 1', value: 'item 1' },
  options: [
    { label: 'item 1', value: 'item 1' },
    { label: 'item 2', value: 'item 2' },
  ],
  placeholder: 'Select Item',
  onChange: () => null,
  disabled: false,
  error: '',
}

export const Multi = Template.bind({})
Multi.args = {
  name: 'select',
  label: 'Multi Select',
  value: { label: 'item 1', value: 'item 1' },
  options: [
    { label: 'item 1', value: 'item 1' },
    { label: 'item 2', value: 'item 2' },
  ],
  placeholder: 'Select Item',
  onChange: () => null,
  disabled: false,
  error: '',
  isMulti: true,
}

export const Creatable = Template.bind({})
Creatable.args = {
  name: 'select',
  label: 'Single Select (Creatable)',
  value: { label: 'item 1', value: 'item 1' },
  options: [
    { label: 'item 1', value: 'item 1' },
    { label: 'item 2', value: 'item 2' },
  ],
  placeholder: 'Select Item',
  onChange: () => null,
  disabled: false,
  error: '',
  isCreatable: true,
}

export default {
  title: 'Example/Select',
  component: Select,
  argTypes: {},
} as Meta
