import { CaretRight } from "phosphor-react";
import { ProductWarrantyContainer } from "./styles";
import { TextDefault } from '../../../components/TextDefault';
import { Button } from '../../../components/Button';
import { ImgDefault } from '../../../components/ImgDefault';
import Calendario from '../../../assets/Calendario-3D.png'

export function ProductWarranty() {
    return (
        <ProductWarrantyContainer id="Serviços">
            <TextDefault>
                <h2>Nós oferecemos garantia de 6 meses</h2>
                <p>Na Power Notebook nós oferecemos garantia de até 6 meses na compra de um notebook semi-novo, além do suporte pela vida inteira.</p>
                <a href="#">
                    <Button>
                        Saiba Mais
                        <CaretRight size={14} weight="bold" />
                    </Button>
                </a>
            </TextDefault>
            <div>
                <ImgDefault src={Calendario} />
            </div>
        </ProductWarrantyContainer>
    )
}