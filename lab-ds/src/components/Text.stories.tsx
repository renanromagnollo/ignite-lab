import {Meta} from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum'
    },

    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default = {}

export const Small = {
    args: {
        size: 'sm'
    }
}

export const Large = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent = {
    args: {
        asChild: 'true',
        children: (
            <p>Custom Component</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}