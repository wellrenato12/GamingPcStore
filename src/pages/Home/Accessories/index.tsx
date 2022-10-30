import { CaretRight, Plus } from "phosphor-react";
import { AccessoriesContainer } from "./styles";
import { TextDefault } from '../../../components/TextDefault';
import { ImgDefault } from '../../../components/ImgDefault';
import { Button } from '../../../components/Button';
import Ssd from '../../../assets/ssd.png'

export function Accessories() {
    return (
        <AccessoriesContainer id="Acessórios">
            <TextDefault>
                <h2>Acessórios de Informática</h2>
                <p>Diversos tipos de acessórios para melhoras o desempenho do seu computador, com parcelamento em até 12x.</p>
                <a href="#">
                    <Button>
                        Acesse nossa Loja
                        <CaretRight size={14} weight="bold" />
                    </Button>
                </a>
            </TextDefault>
            <div>
                <ImgDefault src={Ssd} />
                <div>
                    <a href="#">
                        <Button>
                            <span>
                                <Plus size={20} weight="bold" />
                                Adquira
                            </span>
                        </Button>
                    </a>
                </div>
            </div>
        </AccessoriesContainer>
    )
}