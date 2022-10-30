import { ButtonContainer } from "./styles";

type ButtonProps = {
    children: React.ReactNode;
}

export function Button(props: ButtonProps) {
    return (
        <ButtonContainer>
            {props.children}
        </ButtonContainer>
    )
}