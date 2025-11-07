import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'default',
  },
};

export const Outlined: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'outlined',
    label: 'Outlined Input',
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'filled',
    label: 'Filled Input',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email',
  },
};

export const Error: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: true,
    helperText: 'Password is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    value: 'This is disabled',
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        label="Interactive Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        helperText={`You typed: ${value.length} characters`}
      />
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <Input
        label="Default Variant"
        placeholder="Default input style"
        variant="default"
      />
      <Input
        label="Outlined Variant"
        placeholder="Outlined input style"
        variant="outlined"
      />
      <Input
        label="Filled Variant"
        placeholder="Filled input style"
        variant="filled"
      />
    </div>
  ),
};
