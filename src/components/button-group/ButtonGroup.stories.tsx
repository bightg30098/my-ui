import { faker } from '@faker-js/faker'
import { nanoid } from 'nanoid'
import { useMemo, useState } from 'react'
import ButtonGroup from './ButtonGroup'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Uncontrolled: Story = {
  args: {
    options: Array.from({ length: 3 }, () => ({ key: nanoid(), value: faker.word.noun() })),
  },
  render: (args) => <ButtonGroup {...args} />,
}

export const Controlled: Story = {
  args: {},
  render: (args) => {
    const options = useMemo(() => Array.from({ length: 3 }, () => ({ key: nanoid(), value: faker.word.noun() })), [])
    const [selected, setSelected] = useState(options[1])

    return <ButtonGroup {...args} options={options} selected={selected} onChange={setSelected} />
  },
}
