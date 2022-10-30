import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { FooterMenu } from "./FooterMenu";
import { FooterContainer } from "./styles";

export function Footer() {
    return (
        <FooterContainer id="Contato">
            <FooterMenu>
                <ul>
                    <li>
                        PRODUTOS
                    </li>
                    <a href="#">
                        <li>
                            Notebooks
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Desktops
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Acessórios
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Serviços
                        </li>
                    </a>
                </ul>
                <ul>
                    <li>
                        POWER
                    </li>
                    <a href="#">
                        <li>
                            Sobre
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Equipe
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Suporte
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Parcerias
                        </li>
                    </a>
                </ul>
                <ul>
                    <li>
                        CONTATO
                    </li>
                    <a href="#">
                        <li>
                            Telefone
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Whatsapp
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Instagram
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Facebook
                        </li>
                    </a>
                </ul>
            </FooterMenu>
            <FooterMenu>
                <ul>
                    <li>
                        Endereço:
                    </li>
                    <li>
                        Rua da Abolição, número 91, Ponte Preta
                    </li>
                    <li>
                        NOS SIGA PARA RECEBER OFERTAS EXCLUSIVAS!
                    </li>
                    <li>
                        <div>
                            <a href="#">
                                <InstagramLogo size={32} color="#f00080 " />
                            </a>
                            <a href="#">
                                <FacebookLogo size={32} color="#3453ef" />
                            </a>
                        </div>
                    </li>
                </ul>
            </FooterMenu>
        </FooterContainer>
    )
}