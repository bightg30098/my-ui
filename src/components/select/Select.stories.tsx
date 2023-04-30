import { faker } from '@faker-js/faker'
import { nanoid } from 'nanoid'
import { useMemo, useState } from 'react'
import Select from './Select'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Uncontrolled: Story = {
  args: {
    options: Array.from({ length: 3 }, () => ({ key: nanoid(), value: faker.word.noun() })),
    className: 'w-64',
  },
  render: (args) => <Select {...args} />,
}

export const Controlled: Story = {
  args: {
    className: 'w-64',
  },
  render: (args) => {
    const options = useMemo(() => Array.from({ length: 3 }, () => ({ key: nanoid(), value: faker.word.noun() })), [])
    const [selected, setSelected] = useState(options[1])

    return <Select {...args} options={options} selected={selected} onChange={setSelected} />
  },
}

export const Fixed: Story = {
  args: {
    options: Array.from({ length: 3 }, () => ({ key: nanoid(), value: faker.word.noun() })),
    className: 'w-64',
    strategy: 'fixed',
  },
  render: (args) => <Select {...args} />,
}
