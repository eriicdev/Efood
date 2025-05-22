import { ContainerRest, Description, Infos } from './styles'
import estrelaImg from '../../assets/estrela.png'
import Tag from '../Tag';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    image: string;
    description: string;
    classification: string
    infos: string[]
}

const Restaurant = ({
    description, 
    image, 
    title, 
    classification, 
    infos 
}: Props) => (
    <ContainerRest>
        <img src={image} alt={title}/>
        <Infos>
            {infos.map(info => 
            <Tag size='big' key={info}>{info}</Tag>)}
        </Infos>
        <div>
            <h3>{title}</h3>
            <span>{classification}<img src={estrelaImg}/></span>
        </div>
        <Description>{description}</Description>
        <Link to="/perfil">
            <Tag children={'Saiba mais'} size='small'></Tag>
        </Link>
    </ContainerRest>
)

export default Restaurant