import { Cards } from "../../../components/Cards";
import { CardsContentContainer } from "./styles";

export function CardsContent() {
    return (
        <CardsContentContainer>
            <Cards>
                <h2>6</h2>
                <h3>Meses de Garantia</h3>
            </Cards>
            <Cards>
                <h2>3</h2>
                <h3>Dias para Orçamento</h3>
            </Cards>
            <Cards>
                <h2>30%</h2>
                <h3>De desconto na primeira compra</h3>
            </Cards>
        </CardsContentContainer>
    )
}