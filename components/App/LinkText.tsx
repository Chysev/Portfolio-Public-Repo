import { Text } from "@mantine/core"
import { Link } from "react-router-dom"

const LinkText = (props: { navName: string, to: string }) => {
    return (
        <Link to={props.to} style={{ textDecoration: "none" }}>
            <Text color="whitesmoke" weight={500}>
                {props.navName}
            </Text>
        </Link>
    )
}

export default LinkText