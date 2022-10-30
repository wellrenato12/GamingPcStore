import { CaretDown, CaretRight } from 'phosphor-react'
import { TextDefault } from '../../../components/TextDefault'
import { Button } from '../../../components/Button'
import { ImgDefault } from '../../../components/ImgDefault'
import Personagem from '../../../assets/Personagem-3D.png'
import { PowerNotebookContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function PowerNotebook() {
    return (
        <PowerNotebookContainer>
            <TextDefault>
                <h2>Precisando de Assistência Técnica?</h2>
                <p>A Power Notebook te oferece <br /> o melhor serviço por um preço acessível!</p>
                <NavLink to="/salesnotebook">
                    <Button>
                        Conheça nossos Serviços
                        <CaretDown size={14} weight="bold" />
                    </Button>
                </NavLink>
            </TextDefault>
            <div>
                <ImgDefault src={Personagem} />
                <div>
                    <NavLink to="/salesnotebook">
                        <Button>
                            Venda de Notebooks
                            <CaretRight size={14} weight="bold" />
                        </Button>
                    </NavLink>
                </div>
                <div>
                    <a href="#">
                        <Button>
                            Acessórios de Informática
                            <CaretRight size={14} weight="bold" />
                        </Button>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <Button>
                            Manutenção de Computadores
                            <CaretRight size={14} weight="bold" />
                        </Button>
                    </a>
                </div>
            </div>
        </PowerNotebookContainer>
    )
}