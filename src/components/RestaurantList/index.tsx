import { Container } from "../../styles"
import Restaurant from "../Restaurant"
import { List } from './styles'

import type Restaurants from "../../models/Restaurants"

type Props = {
    restaurants: Restaurants[]
}

const RestaurantList = ({restaurants}: Props) => (
<Container>
    <List>
        {restaurants.map(restaurants => (
            <Restaurant 
                key={restaurants.id}
                classification={restaurants.classification}
                description={restaurants.description}
                image={restaurants.image}
                infos={restaurants.infos}
                title={restaurants.title}
            />
        ))}
    </List>
</Container>
)

export default RestaurantList