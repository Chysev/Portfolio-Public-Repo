import { Card, Flex } from "@mantine/core"

interface Props {
    children: any,
    bg: string
    shadow: string
}

const TemplateCard = ({ children, bg, shadow }: Props) => {
    return (
        <Card mah="250px" radius={8} h="250px" display="flex" bg={bg} shadow={shadow}>
            <Flex direction="column" align="center" m="auto">
                {children}
            </Flex>
        </Card>
    )
}

export default TemplateCard