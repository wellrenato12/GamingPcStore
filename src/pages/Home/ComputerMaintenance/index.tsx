import { CaretRight } from 'phosphor-react';
import { Button } from '../../../components/Button';
import { ImgDefault } from '../../../components/ImgDefault';
import { TextDefault } from '../../../components/TextDefault';
import { ComputerMaintenanceContainer } from "./styles";
import Notebook2 from '../../../assets/pcnote01.png'

export function ComputerMaintenance() {
    return (
        <ComputerMaintenanceContainer>
            <div>
                <ImgDefault src={Notebook2} />
            </div>
            <TextDefault>
                <h2>Manutenção de todos os tipos de Computadores</h2>
                <p>Faça um orçamento gratuito de manutenção do seu equipamento de qualquer tipo, com garantia de 6 meses.</p>
                <Button>
                    Entre em Contato
                    <CaretRight size={14} weight="bold" />
                </Button>
            </TextDefault>
        </ComputerMaintenanceContainer>
    )
}