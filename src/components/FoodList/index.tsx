import { List } from './styles'

import { Container } from "../../styles"
import Food from '../Food'

const FoodList = () => (
    <Container>
        <List>
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
        </List>
    </Container>
)

export default FoodList