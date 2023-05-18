import { Box, Grid, Text, Anchor } from "@mantine/core"
import { useMediaQuery } from '@mantine/hooks';
import { DiReact } from "@react-icons/all-files/di/DiReact"
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs"
import { CgBrowser } from "@react-icons/all-files/cg/CgBrowser"

// Component
import TemplateCard from "../Card/TemplateCard"

const Layer4 = () => {

    const max868 = useMediaQuery('(max-width: 868px)');
    const max610 = useMediaQuery('(max-width: 610px)');


    return (
        <Box
            id="Projects"
            w="100%" bg="#fbfbfb" display="flex">
            <Grid m="auto" grow align="center" justify="space-between" maw={1300} w="100%" py="40px" px="30px">
                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#ffffff" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <FaNodeJs size={80} color="green" />
                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="black" >
                            Express EJS App
                        </Text>
                        <Anchor ff="'Poppins', sans-serif" size={20} weight={200} >
                            Open Source
                        </Anchor>
                    </TemplateCard>
                </Grid.Col>

                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#ffffff" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <Box display="flex" style={{ alignItems: "center", justifyContent: "center" }}>
                            <FaNodeJs size={80} color="green" /> + <DiReact size={80} color="#149eca" />
                        </Box>
                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="black" >
                            Flexiflow.js
                        </Text>
                        <Anchor ff="'Poppins', sans-serif" size={20} weight={200} >
                            Open Source
                        </Anchor>
                    </TemplateCard>
                </Grid.Col>

                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#ffffff" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <CgBrowser size={80} color="#111827" />

                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="black" >
                            Periodic Table
                        </Text>
                        <Anchor ff="'Poppins', sans-serif" size={20} weight={200} >
                            Open Source
                        </Anchor>
                    </TemplateCard>
                </Grid.Col>

                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#ffffff" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <CgBrowser size={80} color="#111827" />

                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="black" >
                            Nightflix
                        </Text>
                        <Anchor ff="'Poppins', sans-serif" size={20} weight={200} >
                            Open Source
                        </Anchor>
                    </TemplateCard>
                </Grid.Col>

                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#ffffff" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <CgBrowser size={80} color="#111827" />

                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="black" >
                            Minecraft Website
                        </Text>
                        <Anchor ff="'Poppins', sans-serif" size={20} weight={200} >
                            Open Source
                        </Anchor>
                    </TemplateCard>
                </Grid.Col>

                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#ffffff" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <CgBrowser size={80} color="#111827" />

                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="black" >
                            Web Code Editor
                        </Text>
                        <Anchor ff="'Poppins', sans-serif" size={20} weight={200} >
                            Open Source
                        </Anchor>
                    </TemplateCard>
                </Grid.Col>

                <Grid.Col span={max610 ? 7 : max868 ? 6 : 4} m="auto">
                    <TemplateCard bg="#ffffff" shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <CgBrowser size={80} color="#111827" />

                        <Text ff="'Poppins', sans-serif" size={30} align="center" weight={500} color="black" >
                            Pageclip Database
                        </Text>
                        <Anchor ff="'Poppins', sans-serif" size={20} weight={200} >
                            Open Source
                        </Anchor>
                    </TemplateCard>
                </Grid.Col>
            </Grid>
        </Box >
    )
}


export default Layer4