import { Box, Grid, Text, Button } from "@mantine/core"
import { useMediaQuery } from '@mantine/hooks';
import { Anchor } from "@mantine/core";

const TextCol = (props: { ColName: string, size: number | string, weight: string }) => {
    return <Text className="LineHeight" color="whitesmoke" ff="'Poppins', sans-serif" weight={props.weight} size={props.size}>{props.ColName}</Text>
}
const Layer1 = () => {

    const max768 = useMediaQuery('(max-width: 768px)');
    const max640 = useMediaQuery('(max-width: 640px)');
    const max560 = useMediaQuery('(max-width: 560px)');
    const max405 = useMediaQuery('(max-width: 405px)');

    return (
        <Box
            w="100%" mah="100vh"
            h="100vh" bg="#1f2937" display="flex" px="30px">
            <Grid m="auto" maw="1260px" w="100%">
                <Grid.Col>
                    <TextCol
                        weight="400" size={max768 ? '24px' : '30px'}
                        ColName="Hello, my name is" />
                    <TextCol
                        weight="800" size={max405 ? '30px' : max560 ? '36px' : max640 ? '48px' : max768 ? '60px' : '72px'}
                        ColName="John Albert Layda" />
                    <TextCol
                        weight="400" size={max405 ? '24px' : max560 ? '30px' : '36px'} ColName="A Full Stack Developer" />
                    <Anchor href="#Aboutme">
                        <Button size={max640 ? '20px' : '24px'} py={max640 ? '10px' : '15px'} px={max640 ? '17px' : '28px'}
                            radius="8px" color="red">About Me</Button>
                    </Anchor>
                </Grid.Col>
            </Grid>
        </Box>
    )
}

export default Layer1