import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
      ],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error',
      ],
    },
  },
}

export default meta
type Story = StoryObj

export const Heading: Story = {
  args: {
    label: 'Título Principal',
    variant: 'h1',
  },
}

export const Body: Story = {
  args: {
    label: 'Este é um parágrafo de texto genérico para a biblioteca.',
    variant: 'body1',
  },
}
