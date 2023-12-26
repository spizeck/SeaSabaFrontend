// src/stories/Card.stories.tsx
import type {Meta, StoryObj} from '@storybook/react'

import {Card, CardProps} from "../components/Card";

const meta: Meta<typeof Card> = {
    component: Card,
}

export default meta;

type Story = StoryObj<typeof Card>

export const Primary: Story = {
    args: {
        title: 'Title',
        description: 'Description',
    },
}