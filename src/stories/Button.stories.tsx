// src/stories/Button.stories.tsx
import React from 'react';
import {Meta} from '@storybook/react';
import Button, {ButtonProps} from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button
} as Meta<ButtonProps>;

export const Primary = {
  args: {
    label: 'Primary Button',
    onClick: () => {
    },
    type: 'primary',
  }
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    onClick: () => {
    },
    type: 'secondary',
  },
};

export const Positive = {
  args: {
    label: 'Positive Button',
    onClick: () => {
    },
    type: 'positive',
  }
}

export const Negative = {
  label: 'Negative Button',
  onClick: () => {
  },
  type: 'negative',
}

export const Warning = {
  label: 'Warning Button',
  onClick: () => {
  },
  type: 'warning',
}

export const Info = {
  label: 'Info Button',
  onClick: () => {
  },
  type: 'info',
}

export const Dark = {
  label: 'Dark Button',
  onClick: () => {
  },
  type: 'dark',
}

export const Light = {
  label: 'Light Button',
  onClick: () => {
  },
  type: 'light',
}

export const Disabled = {
  label: 'Disabled Button',
  onClick: () => {
  },
  type: 'disabled',
}