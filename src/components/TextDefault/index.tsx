import { TextDefaultContainer } from "./style";

type TextDefaultProps = {
    children: React.ReactNode;
}

export function TextDefault(props: TextDefaultProps) {
    return (
        <TextDefaultContainer>
            {props.children}
        </TextDefaultContainer>
    )
}