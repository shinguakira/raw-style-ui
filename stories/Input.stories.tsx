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
