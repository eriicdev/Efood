import { useDispatch, useSelector } from 'react-redux'

import fundoImg from '../../assets/Fundo.png'
import logo from '../../assets/logo.svg'


import {Imagem, Text, Banner, TextBanner, RestaurantName} from './styles'
import { Container } from '../../styles'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import type { RootReducer } from '../../store'

type Props = {
    tipo: string
    titulo: string
    capa: string
}

const HeaderBanner = ({ capa, tipo, titulo }: Props) => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)


    const openCart = () => {
        dispatch(open())
    }
    
    return(
        <>
            <Imagem style={{ backgroundImage: `url(${fundoImg})` }}>
                <Text>Restaurantes</Text>
                <Link to="/">
                    <img src={logo} alt="Efood" />
                </Link>
                <Text onClick={openCart}>
                    {items.length} produto(s) no carrinho
                </Text>
            </Imagem>
            <Banner style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${capa})`}}>
                <Container>
                    <TextBanner>{tipo}</TextBanner>
                    <RestaurantName>{titulo}</RestaurantName>
                </Container>
            </Banner>
        </>
    )
}

export default HeaderBanner