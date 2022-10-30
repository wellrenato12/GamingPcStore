import Logo from '../../assets/LogoPower-Ai.png'
import { FooterTermsContainer } from "./styles";

export function FooterTerms() {
    return (
        <FooterTermsContainer>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div>
                <a href="#">Política de Privacidade</a>
                <a href="#">Termos de Uso</a>
                <a href="#">Política de reembolso</a>
            </div>
            <div>
                &copy; POWERNOTEBOOK
            </div>
        </FooterTermsContainer>
    )
}