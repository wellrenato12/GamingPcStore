import { CaretDown, MagnifyingGlass } from "phosphor-react";
import { Header } from "../../components/Header";
import { Products } from "./Products";
import { ButtonSearch, HomeNotebooks, ImagesTitle, SalesNotebookContainer, Title } from "./styles";
import { useState } from "react";
import Calendario from '../../assets/Calendario-3D.png';

export function SalesNotebook() {
    const [searchNotebook, setSearchNotebook] = useState('')

    return (
        <SalesNotebookContainer>
            <HomeNotebooks>
                <h1>Precisando de assistência técnica?</h1>
                <p>A Power Notebook te oferece o <span>melhor serviço</span> por um preço acessível!</p>
                <a href="#">
                    Conheça nossos serviços 
                    <span><CaretDown size={14} weight="bold" /></span>
                </a>
            </HomeNotebooks>
            <Title>
                <div>
                    <h2>Notebooks</h2>
                    <p>Notebooks semi-novos em ótimo estado, todos revisados e testados, com 6 meses de garantia e suporte pela vida inteira.</p>
                </div>
                <ImagesTitle>
                    <div>
                        <img src={Calendario} alt="Garantia" />
                        <p>6 Meses de Garantia</p>
                    </div>
                    <div>
                        <img src={Calendario} alt="Parcelas" />
                        <p>Em até 12x sem Juros</p>
                    </div>
                </ImagesTitle>
            </Title>
            <ButtonSearch>
                <input type="text" placeholder="Pesquise seu Notebook" onChange={(e) => setSearchNotebook(e.target.value)} value={searchNotebook} />
                <span>
                    <MagnifyingGlass size={14} />
                </span>
            </ButtonSearch>
            <Products searchNotebook={searchNotebook} />
        </SalesNotebookContainer>
    )
}