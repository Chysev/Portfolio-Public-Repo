import { Box, Grid, Text, Anchor } from "@mantine/core"
import { useMediaQuery } from '@mantine/hooks';
import { IoMdBrush } from "@react-icons/all-files/io/IoMdBrush"
import { AiOutlineCloudServer } from "@react-icons/all-files/ai/AiOutlineCloudServer"
import { IoMdCode } from "@react-icons/all-files/io/IoMdCode"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook"

// Component
import TemplateCard from "../Card/TemplateCard"

const Layer3 = () => {

    const max868 = useMediaQuery('(max-width: 868px)');
    const max610 = useMediaQuery('(max-width: 610px)');


    return (
        <Box
            w="100%" bg="#1f2937" display="flex" >
            <Grid m="auto" grow align="center" justify="space-between" maw={1300} w="100%" py="40px" px="30px">
                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#111827" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <IoMdBrush size={80} color="red" />
                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="whitesmoke" >
                            Frontend Developer
                        </Text>
                        <Text ff="'Poppins', sans-serif" size={20} weight={200} color="whitesmoke">
                            React, Next, Vue, and Nuxt 3
                        </Text>
                    </TemplateCard>
                </Grid.Col>
                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#111827" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <AiOutlineCloudServer size={80} color="#c0c0c0" />
                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="whitesmoke">
                            Backend Developer
                        </Text>
                        <Text ff="'Poppins', sans-serif" size={20} weight={200} color="whitesmoke">
                            Express, Fastify, Django
                        </Text>
                    </TemplateCard>
                </Grid.Col>
                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#111827" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <IoMdCode size={80} color="whitesmoke" />
                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="whitesmoke">
                            Framework Developer
                        </Text>
                        <Text ff="'Poppins', sans-serif" size={20} weight={200} color="whitesmoke">
                            Current Project: Flexiflow.js
                        </Text>
                    </TemplateCard>
                </Grid.Col>
                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#111827" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <AiFillGithub size={80} color="whitesmoke" />
                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="whitesmoke">
                            GitHub
                        </Text>
                        <Anchor href="https://github.com/Chysev" underline ff="'Poppins', sans-serif" size={20} weight={200}>
                            Follow me on GitHub
                        </Anchor>
                    </TemplateCard>
                </Grid.Col>
                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#111827" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <SiFacebook size={80} color="blue" />
                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="whitesmoke">
                            Facebook
                        </Text>
                        <Anchor href="https://www.facebook.com/Chysev" ff="'Poppins',  sans-serif" size={20} weight={200}>
                            Follow me on Facebook
                        </Anchor>
                    </TemplateCard>
                </Grid.Col>
            </Grid>
        </Box>
    )
}


export default Layer3