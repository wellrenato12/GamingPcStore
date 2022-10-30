import { Header } from "../../components/Header";
import { ButtonSearch, ImagesTitle, SalesAccessoriesContainer, Title } from "./styles";
import Calendario from '../../assets/Calendario-3D.png';
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Products } from "./Products";

export function SalesAccessories() {
    const [searchAccessories, setSearchAccessories] = useState('')
    
    return (
        <SalesAccessoriesContainer>
            <Title>
                <div>
                    <h2>Acessórios</h2>
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
                <input type="text" placeholder="Pesquise seu acessório" onChange={(e) => setSearchAccessories(e.target.value)} value={searchAccessories} />
                <span>
                    <MagnifyingGlass size={14} />
                </span>
            </ButtonSearch>
            <Products searchAccessories={searchAccessories} />
        </SalesAccessoriesContainer>
    )
}