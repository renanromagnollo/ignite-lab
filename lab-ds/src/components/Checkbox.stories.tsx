import { Meta } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
    title: 'components/Checkbox',
    component: Checkbox,
    args: {},
    argsType: {},
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar de mim por 30 dias</Text>
                </div>
            )
        }
    ]
} as Meta

export const Default = {}

