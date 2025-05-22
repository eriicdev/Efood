import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RestaurantList from "../../components/RestaurantList";
import type Restaurants from "../../models/Restaurants";

import sushiImg from '../../assets/sushi.png' 
import massasImg from '../../assets/Massas.png'

const restaurantDetails: Restaurants[] = [
    {
        id: 1,
        classification: '4.7',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        image: sushiImg,
        infos: ['Destaque da semana', 'Japonesa'],
        title: 'Hioki Sushi'
    },
    {
        id: 2,
        classification: '5.1',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: massasImg,
        infos: ['Italiana'],
        title: 'La Dolce Vita Trattoria'
    },
    {
        id: 3,
        classification: '4.1',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        image: sushiImg,
        infos: ['Destaque da semana', 'Japonesa'],
        title: 'Hioki Sushi'
    },
    {
        id: 4,
        classification: '4.9',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: massasImg,
        infos: ['Italiana'],
        title: 'La Dolce Vita Trattoria'
    },
    {
        id: 5,
        classification: '4.7',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        image: sushiImg,
        infos: ['Destaque da semana', 'Japonesa'],
        title: 'Hioki Sushi'
    },
    {
        id: 6,
        classification: '4.5',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: massasImg,
        infos: ['Italiana'],
        title: 'La Dolce Vita Trattoria'
    }
]

const Home = () => (
<>
    <Header />
    <RestaurantList restaurants={restaurantDetails}/>
    <Footer />
</>
)

export default Home