import { ImgDefaultContainer } from "./styles";

type ImgDefaultProps = {
    src: string;
    alt?: string;
}

export function ImgDefault(props: ImgDefaultProps) {
    return (
        <ImgDefaultContainer src={props.src}></ImgDefaultContainer>
    )
}