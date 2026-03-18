import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible button component built on MUI with Tailwind CSS styling. ' +
          'Style layer (Button.styles.ts) can be swapped independently for alternate themes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'ghost'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary Button' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary Button' },
};

export const Outlined: Story = {
  args: { variant: 'outlined', children: 'Outlined Button' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost Button' },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', children: 'Small' },
};

export const Medium: Story = {
  args: { variant: 'primary', size: 'md', children: 'Medium' },
};

export const Large: Story = {
  args: { variant: 'primary', size: 'lg', children: 'Large' },
};

export const ExtraLarge: Story = {
  args: { variant: 'primary', size: 'xl', children: 'Extra Large' },
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Disabled' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <p className="text-sm text-gray-500 mb-2">Variants</p>
        <div className="flex gap-3 items-center flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Sizes</p>
        <div className="flex gap-3 items-center flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Disabled</p>
        <div className="flex gap-3 items-center flex-wrap">
          <Button disabled variant="primary">Primary</Button>
          <Button disabled variant="outlined">Outlined</Button>
        </div>
      </div>
    </div>
  ),
};
