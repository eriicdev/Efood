import { ContainerFood, ImagemFood, TitleFood, DescriptionFood } from './styles'
import Pizzaimg from '../../assets/Pizza.png'
import { Botao } from '../Button/styles'

const Food = () => (
    <ContainerFood>
        <ImagemFood src={Pizzaimg} alt="Pizza" />
        <div>
            <TitleFood>Pizza Marguerita</TitleFood>
            <DescriptionFood>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</DescriptionFood>
            <Botao>Adicionar ao carrinho</Botao>
        </div>
    </ContainerFood>
)

export default Food