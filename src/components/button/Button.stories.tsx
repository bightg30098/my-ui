import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Button from './Button'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => <Button {...args}>Button</Button>,
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => <Button {...args}>Button</Button>,
}

export const Soft: Story = {
  args: {
    variant: 'soft',
  },
  render: (args) => <Button {...args}>Button</Button>,
}

export const WithIconLeft: Story = {
  args: {
    variant: 'primary',
    icon: CheckCircleIcon,
  },
  render: (args) => <Button {...args}>Button</Button>,
}

export const WithIconRight: Story = {
  args: {
    variant: 'primary',
    icon: CheckCircleIcon,
    iconPosition: 'right',
  },
  render: (args) => <Button {...args}>Button</Button>,
}
