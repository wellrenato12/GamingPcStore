import { FooterMenuContainer } from "./styles";

type FooterProps = {
    children: React.ReactNode
}

export function FooterMenu(props: FooterProps) {
    return (
        <FooterMenuContainer>
            {props.children}
        </FooterMenuContainer>
    )
}