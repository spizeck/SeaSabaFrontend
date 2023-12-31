// src/stories/Header.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import {Header} from '../components/Header';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta;

export const LoggedIn: StoryObj<typeof meta> = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: StoryObj<typeof meta> = {
  args: {
    user: undefined,
  },
  // You can add a 'play' function here if you want to demonstrate specific interactions
};