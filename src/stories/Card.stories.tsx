// src/stories/Card.stories.tsx
import React from 'react'
import {Meta} from '@storybook/react'
import {Card, CardProps} from "../components/Card";

export default {
  title: 'Components/Card',
  component: Card
} as Meta<CardProps>

export const Example= {
  args: {
    title: 'Card Title',
    description: 'Card Description',
  },
};