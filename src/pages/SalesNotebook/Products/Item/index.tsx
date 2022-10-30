import { WhatsappLogo } from "phosphor-react";
import { Button } from "../../../../components/Button";
import { ItemContainer } from "./styles";

export interface ItemProps {
    img: string;
    name: string;
    processor: string;
    memory: string;
    storage: string;
}

export function Item({ img, name, processor, memory, storage}: ItemProps) {
    return (
        <ItemContainer>
            <img src={img} />
            <h2>{name}</h2>
            <p>{processor}</p>
            <p>{memory}</p>
            <p>{storage}</p>
            <Button>
                Compre agora!
                <WhatsappLogo size={20} color="#4dfe01" />
            </Button>
        </ItemContainer>
    )
}